import { AuthenticationError } from "blitz"
import db from "db"

export const checkUserExists = async (email: string, username: string) => {
  const user = await db.user.findFirst({
    where: { email: email.toLowerCase().trim(), username: username.toLowerCase().trim() },
    select: { id: true, name: true, email: true, role: true },
  })

  if (user) {
    const company = await db.company.findFirst({
      where: {
        userId: user.id,
      },
      select: { id: true },
    })

    const intern = await db.intern.findFirst({
      where: {
        userId: user.id,
      },
      select: { id: true },
    })

    if (company || intern) {
      const userError = new AuthenticationError("User already exists")
      userError.name = "USER_IS_INTERN"

      throw userError
    } else {
      return true
    }
  }
}

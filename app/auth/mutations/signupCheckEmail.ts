import { ForgotPassword } from "app/auth/validations"
import { AuthenticationError, resolver } from "blitz"
import db from "db"

export default resolver.pipe(resolver.zod(ForgotPassword), async ({ email }) => {
  const user = await db.user.findFirst({
    where: { email: email.toLowerCase().trim() },
    select: { id: true, name: true, email: true, role: true },
  })

  if (user) {
    const userError = new AuthenticationError("User already exists")
    userError.name = "USER_EXISTS"

    throw userError
  } else {
    return true
  }
})

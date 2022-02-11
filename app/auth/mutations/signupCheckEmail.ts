import { ForgotPassword } from "app/auth/validations"
import { AuthenticationError, resolver } from "blitz"
import db from "db"

export default resolver.pipe(resolver.zod(ForgotPassword), async ({ email }) => {
  const user = await db.user.findFirst({
    where: { email: email.toLowerCase().trim() },
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

    if (company) {
      const companyError = new AuthenticationError("Company already exists")
      companyError.name = "COMPANY_EXISTS"

      throw companyError
    } else if (intern) {
      const internError = new AuthenticationError("Intern already exists")
      internError.name = "USER_IS_INTERN"

      throw internError
    } else {
      return user
    }
  } else {
    return true
  }
})

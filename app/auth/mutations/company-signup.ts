import sendConfEmail from "../util/sendConfEmail"
import { checkUserExists } from "app/auth/mutations/checkUserExists"
import { CompanySignup } from "app/auth/validations"
import { Ctx, resolver, SecurePassword } from "blitz"
import db from "db"

export default resolver.pipe(
  resolver.zod(CompanySignup),
  async (
    { email, password, name, username, description, logo, website, displayName },
    ctx: Ctx
  ) => {
    const hashedPassword = await SecurePassword.hash(password.trim())
    await checkUserExists(email, username)
    const user = await db.user.create({
      data: {
        name,
        username,
        avatar: logo,
        email: email.toLowerCase().trim(),
        hashedPassword,
        role: "COMPANY",
      },
    })

    // we don't need data from the company since the user and company id are the same
    await db.company.create({
      data: { id: user.id, description, website, userId: user.id, displayName },
      select: { id: true },
    })

    await ctx.session.$create({ userId: user.id, role: user.role })
    await sendConfEmail({ user })
    return
  }
)

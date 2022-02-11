import { resolver, SecurePassword } from "blitz"
import db from "db"
import { CompanySignup } from "app/auth/validations"
import { checkUserExists } from "./checkUserExists"

export default resolver.pipe(
  resolver.zod(CompanySignup),
  async ({ email, password, name, description, logo, website }, ctx) => {
    const hashedPassword = await SecurePassword.hash(password.trim())
    await checkUserExists(email)
    const { id, role } = await db.user.create({
      data: {
        email: email.toLowerCase().trim(),
        hashedPassword,
        role: "COMPANY",
      },
    })

    // we don't need data from the company since the user and company id are the same
    await db.company.create({
      data: { id: id, name, description, logo, website, userId: id },
      select: { id: true, name: true },
    })
    await ctx.session.$create({ userId: id, role: role })
  }
)

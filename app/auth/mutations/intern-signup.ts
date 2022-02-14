import { resolver, SecurePassword } from "blitz"
import db from "db"
import { InternSignup } from "app/auth/validations"
import { checkUserExists } from "./checkUserExists"

export default resolver.pipe(
  resolver.zod(InternSignup),
  async ({ email, password, name, logo, bio, oneliner, interests }, ctx) => {
    const hashedPassword = await SecurePassword.hash(password.trim())
    await checkUserExists(email)
    const { id, role } = await db.user.create({
      data: {
        email: email.toLowerCase().trim(),
        hashedPassword,
        role: "INTERN",
      },
    })

    // we don't need data from the user since the user and intern id are the same
    await db.intern.create({
      data: { id, name, avatar: logo, bio, interests, oneliner, userId: id },
    })

    await ctx.session.$create({ userId: id, role: role })
  }
)

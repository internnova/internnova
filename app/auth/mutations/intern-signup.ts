import sendConfEmail from "../util/sendConfEmail"
import { checkUserExists } from "app/auth/mutations/checkUserExists"
import { InternSignup } from "app/auth/validations"
import { Ctx, resolver, SecurePassword } from "blitz"
import db from "db"

export default resolver.pipe(
  resolver.zod(InternSignup),
  async ({ email, password, name, username, logo, bio, oneliner, interests }, ctx: Ctx) => {
    const hashedPassword = await SecurePassword.hash(password.trim())
    await checkUserExists(email, username)
    const user = await db.user.create({
      data: {
        name,
        username,
        avatar: logo,
        email: email.toLowerCase().trim(),
        hashedPassword,
        role: "INTERN",
      },
    })

    // we don't need data from the user since the user and intern id are the same
    await db.intern.create({
      data: { id: user.id, bio, interests, oneliner, userId: user.id },
    })

    await ctx.session.$create({ userId: user.id, role: user.role })
    await sendConfEmail({ user })
    return
  }
)

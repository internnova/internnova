import {Ctx, resolver, SecurePassword} from "blitz"
import db from "db"
import {InternSignup} from "app/auth/validations"
import {checkUserExists} from "app/auth/mutations/checkUserExists"

export default resolver.pipe(
  resolver.zod(InternSignup),
  async ({email, password, name, username, logo, bio, oneliner, interests}, ctx: Ctx) => {
    const hashedPassword = await SecurePassword.hash(password.trim())
    await checkUserExists(email, username)
    const {id, role} = await db.user.create({
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
      data: {id, bio, interests, oneliner, userId: id},
    })

    await ctx.session.$create({userId: id, role})
    return
  }
)

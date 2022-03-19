import { Ctx, resolver } from "blitz"
import db from "db"

export default resolver.pipe(
  resolver.authorize(),
  async ({ userId, description, name, username, avatar, ...data }, ctx: Ctx) => {
    ctx.session.$authorize()
    if (ctx.session.userId !== userId) {
      throw new Error("You are not authorized to update this information")
    }
    const intern = await db.intern.update({
      where: { userId },
      data: { ...data, bio: description },
    })
    const user = await db.user.update({
      where: { id: userId },
      data: { name, username, avatar },
    })
    return { intern, user }
  }
)

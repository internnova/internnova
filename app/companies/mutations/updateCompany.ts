import { resolver, Ctx, AuthenticationError } from "blitz"
import db from "db"

export default resolver.pipe(
  resolver.authorize(),
  async ({ userId, username, name, ...data }, ctx: Ctx) => {
    ctx.session.$authorize()
    if (ctx.session.userId === userId) {
      const company = await db.company.update({ where: { id: userId }, data })
      const user = await db.user.update({ where: { id: userId }, data: { username, name } })
      return { company, user }
    } else {
      throw new AuthenticationError("You are not authorized to update this company")
    }
  }
)

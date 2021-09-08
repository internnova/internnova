import { Ctx } from "blitz"

const logout = async (_: any, ctx: Ctx) => {
  return await ctx.session.$revoke()
}
export default logout

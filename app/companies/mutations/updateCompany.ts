import { resolver, Ctx, AuthenticationError } from "blitz"
import db from "db"
import { z, optional } from "zod"

export const UpdateCompany = z.object({
  id: z.number(),
  name: optional(z.string()),
  userId: optional(z.number()),
  description: optional(z.string().min(100, { message: "Must be at least 100 characters" })),
  logo: optional(z.string().url()),
  website: optional(z.string().url()),
  email: optional(z.string().email()),
})

export default resolver.pipe(resolver.authorize(), async ({ id, ...data }, ctx: Ctx) => {
  ctx.session.$authorize()
  if (ctx.session.userId === data.userId) {
    const company = await db.company.update({ where: { id }, data })
    return company
  } else {
    throw new AuthenticationError("You are not authorized to update this company")
  }
})

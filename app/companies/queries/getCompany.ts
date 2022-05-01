import { resolver, NotFoundError, Ctx } from "blitz"
import db from "db"
import { z } from "zod"

const GetCompany = z.object({
  // This accepts type of undefined, but is required at runtime
  where: z
    .object({
      id: z.number().optional(),
      user: z.object({ username: z.string().optional() }).optional(),
    })
    .optional()
    .refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetCompany), async ({ where }, ctx: Ctx) => {
  const company = await db.company.findFirst({ where, include: { jobs: true, user: true } })
  if (!company) throw new NotFoundError()
  return company
})

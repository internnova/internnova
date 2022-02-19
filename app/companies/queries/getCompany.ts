import { resolver, NotFoundError, Ctx, AuthorizationError } from "blitz"
import db from "db"
import { z } from "zod"

const GetCompany = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetCompany), async ({ id }, ctx: Ctx) => {
  const company = await db.company.findFirst({ where: { id }, include: { jobs: true } })
  if (!company) throw new NotFoundError()
  return company
})

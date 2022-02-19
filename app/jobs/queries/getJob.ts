import { resolver, NotFoundError, Ctx } from "blitz"
import db from "db"
import { z } from "zod"

const GetJob = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetJob), async ({ id }, ctx: Ctx) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const job = await db.job.findFirst({
    where: { id },
    include: { applications: ctx.session.userId ? true : false, company: true },
  })

  return job
})

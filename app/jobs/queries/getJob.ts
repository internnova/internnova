import { Ctx, resolver } from "blitz"
import db from "db"
import { z } from "zod"

const GetJob = z.object({
  // This accepts type of undefined, but is required at runtime
  slug: z.string().optional(),
  companyName: z.string().optional(),
})

export default resolver.pipe(resolver.zod(GetJob), async ({ companyName, slug }, ctx: Ctx) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const job = await db.job.findFirst({
    where: { slug, companyName },
    include: { applications: ctx.session.userId ? true : false, company: true },
  })

  return job
})

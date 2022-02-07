import { resolver, NotFoundError, Ctx } from "blitz"
import db from "db"
import { z } from "zod"

const GetJob = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(
  resolver.zod(GetJob),
  resolver.authorize(),
  async ({ id }, ctx: Ctx) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    ctx.session.$authorize("COMPANY")
    const job = await db.job.findFirst({
      where: { id, companyId: ctx.session.userId },
      include: { applications: true, company: true },
    })

    if (!job || job.companyId !== ctx.session.userId) throw new NotFoundError()

    return job
  }
)

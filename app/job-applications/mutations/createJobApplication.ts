import { resolver, Ctx } from "blitz"
import db from "db"
import { z } from "zod"

export const CreateJobApplication = z.object({
  position: z.string(),
  slug: z.string(),
  jobId: z.number(),
  description: z.string().min(100),
})

export default resolver.pipe(resolver.zod(CreateJobApplication), async (input, ctx: Ctx) => {
  ctx.session.$authorize("INTERN")

  if (ctx.session.userId) {
    const jobApplication = await db.jobApplication.create({
      data: { ...input, internId: ctx.session?.userId, status: "APPLIED" },
    })
    return jobApplication
  } else {
    return false
  }
})

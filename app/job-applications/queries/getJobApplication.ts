import { resolver, NotFoundError, Ctx } from "blitz"
import db from "db"
import { z } from "zod"

const GetJobApplication = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetJobApplication), async ({ id }, ctx: Ctx) => {
  ctx.session.$authorize("COMPANY")

  const jobApplication = await db.jobApplication.findFirst({
    where: { id },
    include: { job: true },
  })

  if (!jobApplication || jobApplication.job.companyId !== ctx.session.userId)
    throw new NotFoundError()

  return jobApplication
})

import { name } from "app/auth/validations"
import { resolver, NotFoundError, Ctx } from "blitz"
import db from "db"
import { z } from "zod"

const GetJobApplication = z.object({
  // This accepts type of undefined, but is required at runtime
  slug: z.string().optional(),
  companyName: z.string().optional(),
})

export default resolver.pipe(
  resolver.zod(GetJobApplication),
  async ({ slug, companyName }, ctx: Ctx) => {
    ctx.session.$authorize()

    const jobApplication = await db.jobApplication.findFirst({
      where: { slug, job: { companyName } },
      include: { job: true, intern: true },
    })

    if (!jobApplication) throw new NotFoundError()

    return jobApplication
  }
)

import { resolver } from "blitz"
import db, { Status } from "db"
import { z } from "zod"

export const UpdateJobApplication = z.object({
  id: z.number(),
  status: z.optional(z.nativeEnum(Status)),
  description: z.optional(z.string().min(100)),
})

export default resolver.pipe(
  resolver.zod(UpdateJobApplication),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const jobApplication = await db.jobApplication.update({
      where: { id },
      data,
      include: {
        job: true,
        intern: true,
      },
    })

    return jobApplication
  }
)

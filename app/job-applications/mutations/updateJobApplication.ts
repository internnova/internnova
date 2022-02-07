import { resolver } from "blitz"
import db, { Status } from "db"
import { z } from "zod"

const UpdateJobApplication = z.object({
  id: z.number(),
  status: z.nativeEnum(Status),
})

export default resolver.pipe(
  resolver.zod(UpdateJobApplication),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const jobApplication = await db.jobApplication.update({ where: { id }, data })

    return jobApplication
  }
)

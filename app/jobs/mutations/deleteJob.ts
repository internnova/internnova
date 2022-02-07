import { resolver, Ctx, AuthenticationError } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteJob = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(DeleteJob),
  resolver.authorize(),
  async ({ id }, ctx: Ctx) => {
    ctx.session.$authorize("COMPANY")
    if (ctx.session.userId === id) {
      const job = await db.job.deleteMany({ where: { id } })

      return job
    } else {
      throw new AuthenticationError("You are not authorized to delete this job")
    }
  }
)

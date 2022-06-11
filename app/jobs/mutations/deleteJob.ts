import {resolver, Ctx, AuthenticationError} from "blitz"
import db from "db"
import {z} from "zod"

const DeleteJob = z.object({
  id: z.number(),
})

export default resolver.pipe(resolver.zod(DeleteJob), async ({id}, ctx: Ctx) => {
  ctx.session.$authorize("COMPANY")
  const job = await db.job.findFirst({where: {id}})
  if (ctx.session.userId === job?.companyId) {
    const deletedJob = await db.job.deleteMany({where: {id}})

    return deletedJob
  } else {
    throw new AuthenticationError("You are not authorized to delete this job")
  }
})

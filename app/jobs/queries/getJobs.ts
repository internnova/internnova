import { paginate, resolver, Ctx } from "blitz"
import db, { Prisma } from "db"

interface GetJobsInput
  extends Pick<Prisma.JobFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  async ({ where, orderBy, skip = 0, take = 100 }: GetJobsInput, ctx: Ctx) => {
    ctx.session.$authorize()
    const {
      items: jobs,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.job.count({ where }),
      query: (paginateArgs) =>
        db.job.findMany({
          ...paginateArgs,
          where: { ...where, companyId: ctx.session.userId || NaN },
          orderBy,
        }),
    })

    return {
      jobs,
      nextPage,
      hasMore,
      count,
    }
  }
)

import {paginate, resolver, Ctx} from "blitz"
import db, {Prisma} from "db"

interface GetJobApplicationsInput
  extends Pick<Prisma.JobApplicationFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  async ({where, orderBy, skip = 0, take = 100}: GetJobApplicationsInput, ctx: Ctx) => {
    ctx.session.$authorize()
    if (!where) {
      if (ctx.session.role === "INTERN") {
        where = {
          internId: ctx.session.userId,
        }
      } else {
        where = {
          job: {
            companyId: ctx.session.userId,
          },
        }
      }
    }
    const {
      items: jobApplications,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.jobApplication.count({where}),
      query: (paginateArgs) =>
        db.jobApplication.findMany({
          ...paginateArgs,
          where,
          orderBy,
          include: {
            job: true,
            intern: true,
          },
        }),
    })

    return {
      jobApplications,
      nextPage,
      hasMore,
      count,
    }
  }
)

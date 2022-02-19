import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetJobApplicationsInput
  extends Pick<Prisma.JobApplicationFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(["COMPANY"]),
  async ({ where, orderBy, skip = 0, take = 100 }: GetJobApplicationsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: jobApplications,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.jobApplication.count({ where }),
      query: (paginateArgs) => db.jobApplication.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      jobApplications,
      nextPage,
      hasMore,
      count,
    }
  }
)

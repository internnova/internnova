import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetInternsInput
  extends Pick<Prisma.InternFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy, skip = 0, take = 100 }: GetInternsInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const {
    items: interns,
    hasMore,
    nextPage,
    count,
  } = await paginate({
    skip,
    take,
    count: () => db.intern.count({ where }),
    query: (paginateArgs) => db.intern.findMany({ ...paginateArgs, where, orderBy }),
  })

  return {
    interns,
    nextPage,
    hasMore,
    count,
  }
})

import { paginate, resolver, Ctx } from "blitz"
import db, { Prisma } from "db"

interface GetCompaniesInput
  extends Pick<Prisma.CompanyFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  async ({ where, orderBy, skip = 0, take = 100 }: GetCompaniesInput, ctx: Ctx) => {
    ctx.session.$authorize()
    const {
      items: companies,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.company.count({ where }),
      query: (paginateArgs) =>
        db.company.findMany({
          ...paginateArgs,
          orderBy,
        }),
    })

    return {
      companies,
      nextPage,
      hasMore,
      count,
    }
  }
)

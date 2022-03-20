import { resolver, Ctx, AuthorizationError } from "blitz"
import db from "db"
import { CreateJobServer } from "../../auth/validations"
import { slugify } from "../../pages/[userName]"

export default resolver.pipe(
  resolver.zod(CreateJobServer),
  resolver.authorize("COMPANY"),
  async ({ ...data }, ctx: Ctx) => {
    ctx.session.$authorize("COMPANY")
    const company = await db.company.findFirst({
      where: { id: ctx.session.userId },
      select: { user: true, id: true },
    })

    if (!company) throw new AuthorizationError()

    const job = await db.job.create({
      data: { ...data, companyId: company.id, slug: slugify(data.position) },
    })

    return job
  }
)

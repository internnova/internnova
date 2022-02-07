import { resolver, Ctx, AuthorizationError } from "blitz"
import db, { JobType, Tag } from "db"
import { z } from "zod"

const jobType = z.nativeEnum(JobType)
const industryType = z.nativeEnum(Tag)

export const CreateJobServer = z.object({
  position: z.string().min(10).max(50),
  description: z.string().min(100).max(1000),
  jobType: jobType,
  location: z.optional(z.string()),
  salary: z.optional(z.string()),
  skillsRequired: z.string().array(),
  industry: industryType,
  duration: z.string(),
})

export const CreateJobClient = z.object({
  position: z.string().min(10).max(50),
  description: z.string().min(100).max(1000),
  jobType: jobType,
  location: z.optional(z.string()),
  salary: z.optional(z.string()),
  skillsRequired: z.string(),
  industry: industryType,
  duration: z.string(),
})

export default resolver.pipe(
  resolver.zod(CreateJobServer),
  resolver.authorize("COMPANY"),
  async ({ ...data }, ctx: Ctx) => {
    ctx.session.$authorize("COMPANY")
    const company = await db.company.findFirst({ where: { id: ctx.session.userId } })

    if (!company) throw new AuthorizationError()

    const job = await db.job.create({
      data: { ...data, companyName: company.name, companyId: company.id },
    })

    return job
  }
)

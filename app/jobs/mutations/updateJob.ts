import { resolver } from "blitz"
import db, { JobType, Tag } from "db"
import { z } from "zod"

const jobType = z.nativeEnum(JobType)
const industryType = z.nativeEnum(Tag)

export const UpdateJobServer = z.object({
  id: z.number(),
  position: z.optional(z.string().min(10).max(50)),
  description: z.optional(z.string().min(100).max(1000)),
  jobType: z.optional(jobType),
  location: z.optional(z.string()),
  salary: z.optional(z.string()),
  skillsRequired: z.optional(z.string().array()),
  industry: z.optional(industryType),
  duration: z.optional(z.string()),
  companyName: z.optional(z.string()),
})

export const UpdateJobClient = z.object({
  id: z.number(),
  position: z.optional(z.string().min(10).max(50)),
  description: z.optional(z.string().min(100).max(1000)),
  jobType: z.optional(jobType),
  location: z.optional(z.string()),
  salary: z.optional(z.string()),
  skillsRequired: z.optional(z.string()),
  industry: z.optional(industryType),
  duration: z.optional(z.string()),
  companyName: z.optional(z.string()),
})

export default resolver.pipe(
  resolver.zod(UpdateJobServer),
  resolver.authorize("COMPANY"),
  async ({ id, ...data }) => {
    const job = await db.job.update({ where: { id }, data })

    return job
  }
)

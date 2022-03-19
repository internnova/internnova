import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetIntern = z.object({
  // This accepts type of undefined, but is required at runtime
  where: z
    .object({
      id: z.number().optional(),
      user: z.object({ username: z.string().optional() }).optional(),
    })
    .optional()
    .refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetIntern), resolver.authorize(), async ({ where }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const intern = await db.intern.findFirst({
    where,
    select: {
      interests: true,
      jobApplications: true,
      user: true,
      id: true,
      bio: true,
      oneliner: true,
      userId: true,
    },
  })

  if (!intern) throw new NotFoundError()

  return intern
})

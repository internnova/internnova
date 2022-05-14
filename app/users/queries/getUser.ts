import { NotFoundError, resolver } from "blitz"
import db from "db"
import { z } from "zod"

const GetUser = z.object({
  // This accepts type of undefined, but is required at runtime
  where: z
    .object({
      username: z.string().optional(),
      id: z.number().optional(),
    })
    .optional()
    .refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetUser), resolver.authorize(), async ({ where }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const user = await db.user.findFirst({
    where,
    select: {
      intern: true,
      company: true,
      role: true,
      name: true,
      username: true,
      email: true,
    },
  })

  if (!user) throw new NotFoundError()

  return user
})

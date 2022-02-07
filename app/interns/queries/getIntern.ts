import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetIntern = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetIntern), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const intern = await db.intern.findFirst({ where: { id } })

  if (!intern) throw new NotFoundError()

  return intern
})

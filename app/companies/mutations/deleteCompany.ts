import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { Ctx } from "blitz"

const DeleteCompany = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(DeleteCompany),
  resolver.authorize(),
  async ({ id }, ctx: Ctx) => {
    if (id === ctx.session.userId) {
      const company = await db.company.deleteMany({ where: { id } })
      return company
    } else {
      throw new Error("You are not authorized to delete this company")
    }
  }
)

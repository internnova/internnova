import {resolver} from "blitz"
import {Ctx} from "blitz"
import db from "db"
import {z} from "zod"

const CompanyInDb = z.object({
  username: z.string(),
})

export default resolver.pipe(
  resolver.zod(CompanyInDb),
  resolver.authorize(),
  async ({username}, ctx: Ctx) => {
    const user = await db.user.findFirst({
      where: {
        username,
      },
      include: {
        company: true,
      },
    })
    return user
  }
)

import sendConfEmail from "../util/sendConfEmail"
import { resolver, generateToken, hash256, Ctx } from "blitz"
import db from "db"

export default resolver.pipe(async ({ ...data }, ctx: Ctx) => {
  ctx.session.$authorize(data.role)

  // 1. Get the user
  const user = await db.user.findFirst({ where: { id: ctx.session.userId } })

  // 2. If user with this email was found
  if (user) {
    // 3. Generate a token and send an email
    await sendConfEmail({ user })
  } else {
    // 4. If no user found wait the same time so attackers can't tell the difference
    await new Promise((resolve) => setTimeout(resolve, 750))
  }

  // 5. Return the same result whether a email reset email was sent or not
  return
})

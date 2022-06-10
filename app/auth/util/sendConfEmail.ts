import { generateToken, hash256 } from "blitz"
import db, { User } from "db"
import { confirmEmailMailer } from "mailers/confirmEmailMailer"

const CONFIRM_EMAIL_TOKEN_EXPIRATION_IN_HOURS = 24

const sendConfEmail = async ({ user }: { user: User }) => {
  // Generate a new token
  const token = generateToken()
  const hashedToken = hash256(token)
  const expiresAt = new Date()
  expiresAt.setHours(expiresAt.getHours() + CONFIRM_EMAIL_TOKEN_EXPIRATION_IN_HOURS)
  // Save this new token in the database.
  await db.token.create({
    data: {
      userId: user.id,
      type: "CONFIRM_EMAIL",
      expiresAt,
      hashedToken,
      sentTo: user.email,
    },
  })
  // Send the email
  await confirmEmailMailer({ to: user.email, token }).send()
}

export default sendConfEmail

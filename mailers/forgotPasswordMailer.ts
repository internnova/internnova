/* TODO - You need to add a mailer integration in `integrations/` and import here.
 *
 * The integration file can be very simple. Instantiate the email client
 * and then export it. That way you can import here and anywhere else
 * and use it straight away.
 */
import previewEmail from "preview-email"

type ResetPasswordMailer = {
  to: string
  token: string
  name: string
}

export function forgotPasswordMailer({ to, token, name }: ResetPasswordMailer) {
  // In production, set APP_ORIGIN to your production server origin
  const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN
  const resetUrl = `${origin}/reset-password?token=${token}`

  const msg = {
    from: "TODO@example.com",
    to,
    subject: "Your Password Reset Instructions",
    html: `
      <h1>Reset Your Password</h1>
      <h3>NOTE: You must set up a production email integration in mailers/forgotPasswordMailer.ts</h3>
      <h3>Hi ${name},</h3>
      You have requested for a new password. If you didn't request for a new password please ignore this email.
      <a href="${resetUrl}">
        Click here to set a new password
      </a>
    `,
  }

  return {
    async send() {
      if (process.env.NODE_ENV === "production") {
        // TODO - send the production email, like this:
        // await postmark.sendEmail(msg)
        throw new Error("No production email implementation in mailers/forgotPasswordMailer")
      } else {
        // Preview email in the browser
        await previewEmail(msg)
      }
    },
  }
}

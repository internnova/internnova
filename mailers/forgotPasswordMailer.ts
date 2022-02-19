import previewEmail from "preview-email"
import mailer from "integrations/mailer"

type ResetPasswordMailer = {
  to: string
  token: string
}

export function forgotPasswordMailer({ to, token }: ResetPasswordMailer) {
  // In production, set APP_ORIGIN to your production server origin
  const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN
  const resetUrl = `${origin}/reset-password?token=${token}`

  const msg = {
    from: "auth@internnova.co",
    to,
    subject: "Your Password Reset Instructions",
    html: `
    <p align="center"><img src="https://www.internnova.co/logo/Logo.png" width=100/></p>
    <h1 align="center">Reset Your Password</h1>
    <p align="center"><strong></strong>You can reset your password using this link:</strong></p>
    <p align="center"><a href="${resetUrl}">${resetUrl}</a></p>
    <br>
    <br>
    <p> If you haven't asked for a password reset, you can safely ignore this email.</p>
    `,
  }

  return {
    async send() {
      if (process.env.NODE_ENV === "development") {
        previewEmail(msg)
      } else {
        mailer.send(msg)
      }
    },
  }
}

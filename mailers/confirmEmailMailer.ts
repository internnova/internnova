import previewEmail from "preview-email"
import mailer from "integrations/mailer"

type ResetPasswordMailer = {
  to: string
  token: string
}

export function confirmEmailMailer({ to, token }: ResetPasswordMailer) {
  // In production, set APP_ORIGIN to your production server origin
  const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN
  const resetUrl = `${origin}/confirm-email?token=${token}`

  const msg = {
    from: "auth@internnova.co",
    to,
    subject: "Confirm your email address",
    html: `
    <p align="center"><img src="https://www.internnova.co/logo/Logo.png" width=100/></p>
    <h1 align="center">Welcome to InternNova</h1>
    <p align="center"><strong></strong>Confirm your password by clicking on this link:</strong></p>
    <p align="center"><a href="${resetUrl}">${resetUrl}</a></p>
    <br>
    <br>
    <p> If you haven't signed up on our platform, you can safely ignore this email.</p>
    `,
  }

  return {
    async send() {
      if (process.env.NODE_ENV === "development") {
        await previewEmail(msg)
      } else {
        mailer.send(msg)
      }
    },
  }
}

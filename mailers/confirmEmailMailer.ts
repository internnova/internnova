import mailer from "integrations/mailer"
import previewEmail from "preview-email"

type ResetPasswordMailer = {
  to: string
  token: string
}

export function confirmEmailMailer({to, token}: ResetPasswordMailer) {
  const origin = process.env.APP_ORIGIN || "http://localhost:3000"
  const resetUrl = `${origin}/confirm-email?token=${token}`

  const msg = {
    from: "auth@internnova.co",
    to,
    subject: "Confirm your email address",
    html: `
    <p align="center"><img src="${origin}/logo.png" width=100/></p>
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

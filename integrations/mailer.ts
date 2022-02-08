import sgMail from "@sendgrid/mail"

export const send = ({
  to,
  from,
  subject,
  html,
}: {
  to: string
  from: string
  subject: string
  html: string
}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

  const msg = {
    to,
    from,
    subject,
    html,
  }

  ;(async () => {
    try {
      await sgMail.send(msg)
    } catch (error) {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
    }
  })()
}

const mailer = { send }
export default mailer

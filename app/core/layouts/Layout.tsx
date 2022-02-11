import { Head, BlitzLayout, useMutation } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import sendConfirmationEmail from "app/auth/mutations/sendConfirmationEmail"

const Layout: BlitzLayout<{ title?: string; noVerification?: boolean }> = ({
  title,
  noVerification,
  children,
}) => {
  const [sendConfirmationEmailMutation, { isSuccess }] = useMutation(sendConfirmationEmail)
  const user = useCurrentUser()

  if (user && !user.verified && !noVerification) {
    return (
      <div>
        You need to verify your email.{" "}
        <button
          onClick={() => {
            ;(async () => {
              await sendConfirmationEmailMutation()
            })()
          }}
        >
          Click here
        </button>{" "}
        to resend the email. If you have already verified your email, please reload this page
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{`${title} | InternNova` || "InternNova"}</title>
      </Head>
      {children}
    </>
  )
}

Layout.authenticate = true

export default Layout

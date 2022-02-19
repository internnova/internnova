import { Head, BlitzLayout, useRouter, Routes, useMutation } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { Meta } from "../partials/Meta"
import { Popup } from "../components/Popup"
import { Button } from "../components/Button"
import sendConfirmationEmail from "../../auth/mutations/sendConfirmationEmail"

const Layout: BlitzLayout<{ title?: string; noVerification?: boolean }> = ({
  title,
  noVerification,
  children,
}) => {
  const [sendConfirmationMutation] = useMutation(sendConfirmationEmail)
  const user = useCurrentUser()
  return (
    <>
      <Head>
        <title>{`${title} | InternNova` || "InternNova"}</title>
        <Meta title={`${title} | InternNova` || "InternNova"} />
      </Head>
      {children}
      {user && !user.verified && !noVerification && (
        <Popup title="Verify Email" scroll={false} {...{ style: { height: "30ch" } }}>
          <div className="px-8 py-10 mb-4 flex flex-col gap-6">
            <div className="">
              You&apos;re almost there! Just verify your email to continue. Be sure to check <br />
              your spam folder or unblock auth@internnova.co
            </div>
            <Button
              onClick={async () => {
                await sendConfirmationMutation()
              }}
            >
              Resend
            </Button>
          </div>
        </Popup>
      )}
    </>
  )
}

Layout.authenticate = true

export default Layout

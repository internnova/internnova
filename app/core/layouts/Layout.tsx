import {Head, BlitzLayout, useRouter, Routes, useMutation, useSession} from "blitz"
import {useCurrentUser} from "app/core/hooks/useCurrentUser"
import {Meta} from "../partials/Meta"
import {Popup} from "../components/Popup"
import {Button} from "../components/Button"
import sendConfirmationEmail from "../../auth/mutations/sendConfirmationEmail"
import {Nav} from "../components/Nav"
import Error from "next/error"

const Layout: BlitzLayout<{
  title?: string
  noVerification?: boolean
  intern?: boolean
  company?: boolean
}> = ({title, noVerification, children, intern, company}) => {
  const [sendConfirmationMutation] = useMutation(sendConfirmationEmail)
  const user = useCurrentUser()

  if (intern && user?.role !== "INTERN") {
    return <Error statusCode={403} />
  }

  if (company && user?.role !== "COMPANY") {
    return <Error statusCode={403} />
  }

  return (
    <>
      <Head>
        <title>{`${title} | InternNova` || "InternNova"}</title>
        <Meta title={`${title} | InternNova` || "InternNova"} />
      </Head>

      {user !== null && <Nav />}
      <main className="container m-auto">{children}</main>
      {user && !user.verified && !noVerification && (
        <Popup title="Verify Email" scroll={false} {...{style: {height: "30ch"}}}>
          <div className="flex flex-col gap-6 py-10 px-8 mb-4">
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

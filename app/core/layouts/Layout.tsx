import sendConfirmationEmail from "app/auth/mutations/sendConfirmationEmail"
import {Button} from "app/core/components/Button"
import {HomeBar} from "app/core/components/HomeBar"
import {Nav} from "app/core/components/Nav"
import {Popup} from "app/core/components/Popup"
import {Sidebar} from "app/core/components/Sidebar"
import {Spinner} from "app/core/components/Spinner"
import {BookmarkProvider} from "app/core/contexts/BookmarkProvider"
import {useCurrentUser} from "app/core/hooks/useCurrentUser"
import {Meta} from "app/core/partials/Meta"
import {BlitzLayout, Head, useMutation} from "blitz"
import Error from "next/error"
import {Suspense} from "react"

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
      <div className="flex overflow-hidden h-screen">
        {user !== null && (
          <div className="hidden md:flex lg:flex-shrink-0">
            <Sidebar />
          </div>
        )}
        <main className="grow overflow-x-hidden">
          <Nav />
          <BookmarkProvider>
            <Suspense fallback={<Spinner />}>
              <div className="container mx-auto">{children}</div>
            </Suspense>
          </BookmarkProvider>
          <div className="pt-16 md:pt-0">
            <HomeBar />
          </div>
        </main>
      </div>
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

import { Head, BlitzLayout, useRouter, Routes, useMutation, useSession } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { Meta } from "../partials/Meta"
import { Popup } from "../components/Popup"
import { Button } from "../components/Button"
import sendConfirmationEmail from "../../auth/mutations/sendConfirmationEmail"
import { Nav } from "../components/Nav"
import { Sidebar } from "../components/Sidebar"
import { BookmarkProvider } from "../contexts/BookmarkProvider"
import { HomeBar } from "../components/HomeBar"

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
      <div className="flex overflow-hidden h-screen">
        {user !== null && (
          <div className="hidden md:flex lg:flex-shrink-0">
            <Sidebar />
          </div>
        )}
        <main className="grow overflow-x-hidden">
          <Nav />
          <BookmarkProvider>
            <div className="container mx-auto">{children}</div>
          </BookmarkProvider>
          <HomeBar />
        </main>
      </div>
      {user && !user.verified && !noVerification && (
        <Popup title="Verify Email" scroll={false} {...{ style: { height: "30ch" } }}>
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

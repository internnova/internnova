import { Head, BlitzLayout, useMutation } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import sendConfirmationEmail from "app/auth/mutations/sendConfirmationEmail"

const Layout: BlitzLayout<{ title?: string; noVerification?: boolean }> = ({ title, children }) => (
  <>
    <Head>
      <title>{`${title} | InternNova` || "InternNova"}</title>
    </Head>
    {children}
  </>
)

Layout.authenticate = true

export default Layout

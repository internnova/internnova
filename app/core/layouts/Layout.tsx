import { Head, BlitzLayout, useMutation, Router } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

const Layout: BlitzLayout<{ title?: string; noVerification: boolean }> = ({
  title,
  noVerification,
  children,
}) => {
  const user = useCurrentUser()

  if (user && !user.verified && !noVerification) {
    Router.push("/signup")
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

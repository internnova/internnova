import { Head, BlitzLayout, useRouter, Routes } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

const Layout: BlitzLayout<{ title?: string; noVerification?: boolean }> = ({
  title,
  noVerification,
  children,
}) => {
  const user = useCurrentUser()
  const router = useRouter()

  if (user && !user.verified && !noVerification) {
    if (router.pathname !== "signup") {
      router.push(Routes.SignupPage())
      return <></>
    }
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

import { Head, BlitzLayout, useRouter, Routes, useMutation } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { Meta } from "../partials/Meta"
import { Popup } from "../components/Popup"

const Layout: BlitzLayout<{ title?: string; noVerification?: boolean }> = ({
  title,
  noVerification,
  children,
}) => {
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
          <div className="px-8 py-10 mb-4">
            You&apos;re almost there! Just verify your email to continue
          </div>
        </Popup>
      )}
    </>
  )
}

Layout.authenticate = true

export default Layout

import { Head, BlitzLayout } from "blitz"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
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

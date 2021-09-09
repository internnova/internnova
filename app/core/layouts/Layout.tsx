import { Head } from "blitz"
import { ReactNode } from "react"
import Meta from "app/core/components/Meta"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "intern-nova"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Meta />

      {children}
    </>
  )
}

export default Layout

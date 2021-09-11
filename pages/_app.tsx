import React from "react"
import type { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import { UserProvider } from "@auth0/nextjs-auth0"
import { useUser } from "@auth0/nextjs-auth0"
import Loading from "components/Loading"

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  const { isLoading } = useUser()

  if (isLoading) {
    return <Loading />
  }

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default App

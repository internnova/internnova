import React from "react"
import type { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import { UserProvider } from "@auth0/nextjs-auth0"

const App = ({ Component, pageProps }: AppProps): React.ReactNode => (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
)

export default App

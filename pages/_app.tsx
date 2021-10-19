import React from "react"
import type { AppProps } from "next/app"
import "tailwindcss/tailwind.css"

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return <Component {...pageProps} />
}

export default App

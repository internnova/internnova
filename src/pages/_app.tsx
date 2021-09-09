import React from "react"
import type { AppProps } from "next/app"
import "src/styles/globals.css"

const App = ({ Component, pageProps }: AppProps): React.ReactNode => <Component {...pageProps} />

export default App

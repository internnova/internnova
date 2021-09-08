import LoginForm from "app/auth/components/LoginForm"
import "app/core/styles/index.css"
import {
  AppProps,
  AuthenticationError,
  AuthorizationError,
  ErrorBoundary,
  ErrorComponent,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz"
import { Suspense } from "react"

const App = ({ Component, pageProps }: AppProps) => {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <Suspense
        fallback={
          <div className="hero container max-w-screen-lg mx-auto pb-10">
            <img
              className="mx-auto"
              src="https://i2.wp.com/boingboing.net/wp-content/uploads/2015/10/tumblr_nlohpxGdBi1tlivlxo1_12801.gif"
              alt=""
            />
          </div>
        }
      >
        {getLayout(<Component {...pageProps} />)}
      </Suspense>
    </ErrorBoundary>
  )
}

const RootErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  if (error instanceof AuthenticationError) {
    return <LoginForm onSuccess={resetErrorBoundary} />
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}

export default App

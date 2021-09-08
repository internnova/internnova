import LoginForm from "app/auth/components/LoginForm"
import { Logo } from "app/core/components/Logo"
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
          <div className="flex h-screen justify-center items-center">
            <div className="animate-bounce">
              <Logo big />
            </div>
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

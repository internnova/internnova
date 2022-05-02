import {Spinner} from "app/core/components/Spinner"
import "app/core/styles/index.css"
import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  AuthenticationError,
  AuthorizationError,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
  useRouter,
  Routes,
} from "blitz"
import {Suspense} from "react"

export default function App({Component, pageProps}: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <div className="overflow-scroll">
        <Suspense fallback={<Spinner />}>{getLayout(<Component {...pageProps} />)}</Suspense>
      </div>
    </ErrorBoundary>
  )
}

function RootErrorFallback({error}: ErrorFallbackProps) {
  const router = useRouter()
  if (error instanceof AuthenticationError) {
    if (router.pathname !== "/login") {
      router.push(Routes.LoginPage())
    }
    return <Spinner />
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

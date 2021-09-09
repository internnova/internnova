import { LoginForm } from "app/auth/components/LoginForm"
import Meta from "app/core/components/Meta"
import { BlitzPage, useRouter } from "blitz"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <>
      <Meta title="Login" />
      <div>
        <LoginForm
          onSuccess={() => {
            const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
            router.push(next)
          }}
        />
      </div>
    </>
  )
}

LoginPage.redirectAuthenticatedTo = "/"

export default LoginPage

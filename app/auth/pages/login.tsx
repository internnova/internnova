import { LoginForm } from "app/auth/components/LoginForm"
import Layout from "app/core/layouts/Layout"
import { useRouter, BlitzPage } from "blitz"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <LoginForm
        onSuccess={(_user) => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
          router.push(next)
        }}
      />
    </div>
  )
}

LoginPage.redirectAuthenticatedTo = "/"
LoginPage.getLayout = (page) => (
  <Layout title="Log In" noVerification>
    {page}
  </Layout>
)

export default LoginPage

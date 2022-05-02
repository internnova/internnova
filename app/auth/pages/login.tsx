import {LoginForm} from "app/auth/components/LoginForm"
import Layout from "app/core/layouts/Layout"
import {BlitzPage, useRouter} from "blitz"
import Image from "next/image"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div className="overflow-hidden h-screen select-none">
      <h1 className="pt-8 h-0 text-center tracking-4 px-2">
        Welcome back to <span className="animated-text">InternNova</span>!
      </h1>
      <div className="flex gap-8 justify-center items-center w-full h-screen select-none">
        <div className="hidden lg:block">
          <Image
            src="/images/login-illustration.svg"
            alt="login-illustration"
            width={580}
            height={580}
          />
        </div>
        <LoginForm
          onSuccess={(_user) => {
            const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
            router.push(next)
          }}
        />
      </div>
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

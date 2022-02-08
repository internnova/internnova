import { useRouter, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import { Meta } from "app/core/partials/Meta"
import Image from "next/image"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <>
      <Meta />
      <div className="h-screen overflow-hidden select-none">
        <h1 className="text-center h-0 tracking-4 pt-8">
          Welcome back <span className="animated-text">Intern!</span>
        </h1>
        <div className="h-screen w-full flex items-center justify-center select-none gap-8">
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
    </>
  )
}

LoginPage.redirectAuthenticatedTo = "/"
LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default LoginPage

import { SignupForm } from "app/auth/components/SignupForm"
import { Meta } from "app/core/partials/Meta"
import Image from "next/image"
import Layout from "app/core/layouts/Layout"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <>
      <Meta />
      <div className="h-screen overflow-hidden select-none">
        <h1 className="text-center h-0 tracking-4 pt-8">
          It&apos;s time to become an <span className="animated-text">InternNova</span>
        </h1>
        <div className="h-full w-full flex items-center justify-center gap-8">
          <div className="hidden lg:block select-none">
            <Image
              src="/images/signup-illustration.svg"
              alt="signup-illustration"
              width={580}
              height={580}
            />
          </div>
          <SignupForm onSuccess={() => router.push(Routes.Home())} />
        </div>
      </div>
    </>
  )
}

SignupPage.redirectAuthenticatedTo = "/"
SignupPage.getLayout = (page) => (
  <Layout title="Sign Up" noVerification>
    {page}
  </Layout>
)

export default SignupPage

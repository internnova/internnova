import { SignupForm } from "app/auth/components/SignupForm"
import Meta from "app/core/components/Meta"
import { BlitzPage, Routes, useRouter } from "blitz"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <>
      <Meta title="Register For an account" />
      <SignupForm onSuccess={() => router.push(Routes.Home())} />
    </>
  )
}

SignupPage.redirectAuthenticatedTo = "/"

export default SignupPage

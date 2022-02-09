import { useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { SignupForm, SignUpValues } from "app/auth/components/SignupForm"
import { Meta } from "app/core/partials/Meta"
import Image from "next/image"
import { SignUpPopup } from "../components/SignUpPopup"
import { useState } from "react"

const SignupPage: BlitzPage = () => {
  const [values, setValues] = useState<SignUpValues | undefined>()

  return (
    <>
      <Meta />
      <div
        className={`h-screen w-full grid place-items-center overflow-hidden select-none ${
          values && "pointer-events-none"
        }`}
      >
        <h1 className="text-center h-0 tracking-4">
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
          <SignupForm onSuccess={(values: SignUpValues) => setValues(values)} />
        </div>
      </div>
      {values && <SignUpPopup signUpValues={values} />}
    </>
  )
}

SignupPage.redirectAuthenticatedTo = "/"
SignupPage.getLayout = (page) => <Layout title="Sign Up">{page}</Layout>

export default SignupPage

import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { SignupForm, SignUpValues } from "app/auth/components/SignupForm"
import { Meta } from "app/core/partials/Meta"
import Image from "next/image"
import { CompanyPopup } from "../components/CompanyPopup"
import { useState } from "react"
import { VerifyEmail } from "../components/VerifyEmail"
import { InternPopup } from "../components/InternPopup"
import { useCurrentUser } from "../../core/hooks/useCurrentUser"

const SignupPage: BlitzPage = () => {
  const [values, setValues] = useState<SignUpValues | undefined>()
  const [index, setIndex] = useState<number>(0)
  const user = useCurrentUser()

  return (
    <>
      <Meta />
      <div
        className={`h-screen w-full grid place-items-center overflow-hidden select-none ${
          values && "pointer-events-none"
        }`}
      >
        <h1 className="text-center h-0 tracking-4">
          It&apos;s time to become a <span className="animated-text">revolutionary</span>
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
      {values &&
        index === 0 &&
        (values.role === "Company" ? (
          <CompanyPopup signUpValues={values} onSuccess={() => setIndex(2)} />
        ) : (
          <InternPopup signUpValues={values} onSuccess={() => setIndex(2)} />
        ))}
      {user && !user.verified && <VerifyEmail />}
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

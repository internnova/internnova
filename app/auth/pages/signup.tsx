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
import { Interests } from "../components/Interests"

interface InternValues {
  bio?: string
  oneliner?: string
  logo?: string
  interests?: string[]
}

export type values = InternValues & SignUpValues

const SignupPage: BlitzPage = () => {
  const ABOUT = "about"
  const VERIFY = "verify"
  const INTERESTS = "interests"
  const [values, setValues] = useState<values | undefined>()
  const [index, setIndex] = useState<string>(ABOUT)
  const user = useCurrentUser()

  const handleSuccess = (values, index: string) => {
    setValues(values)
    setIndex(index)
  }

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
        index === ABOUT &&
        (values.role === "Company" ? (
          <CompanyPopup onSuccess={(val) => handleSuccess({ ...values, ...val }, VERIFY)} />
        ) : (
          <InternPopup
            onSuccess={(val: InternValues) => handleSuccess({ ...values, ...val }, INTERESTS)}
          />
        ))}
      {values && index === INTERESTS && (
        <Interests onSuccess={(interests) => handleSuccess(interests, VERIFY)} />
      )}
      {((user && !user.verified) || index === VERIFY) && <VerifyEmail values={values} />}
    </>
  )
}

SignupPage.getLayout = (page) => (
  <Layout title="Sign Up" noVerification>
    {page}
  </Layout>
)

export default SignupPage

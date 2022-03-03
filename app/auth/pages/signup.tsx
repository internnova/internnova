import { BlitzPage, useRouter } from "blitz"
import Layout from "app/core/layouts/Layout"
import { SignupForm, SignUpValues } from "app/auth/components/SignupForm"
import Image from "next/image"
import { CompanyPopup } from "../components/CompanyPopup"
import { useState } from "react"
import { VerifyEmail } from "../components/VerifyEmail"
import { InternPopup } from "../components/InternPopup"
import { useCurrentUser } from "../../core/hooks/useCurrentUser"
import { Interests } from "../components/Interests"

export interface InternValues {
  bio: string
  oneliner: string
  logo: string
}

export interface CompanyValues {
  name: string
  logo: string
  website: string
  description: string
}

export type values = {
  general: SignUpValues
  intern: InternValues
  company: CompanyValues
}

const SignupPage: BlitzPage = () => {
  const ABOUT = "about"
  const INTERESTS = "interests"
  const [values, setValues] = useState<values>({
    general: { name: "", email: "", password: "", role: "" },
    intern: { bio: "", oneliner: "", logo: "" },
    company: { name: "", logo: "", website: "", description: "" },
  })
  const [index, setIndex] = useState<string>(ABOUT)
  const showPopup = (idx: string) => index === idx
  const handleSuccess = (values, index: string) => {
    setValues(values)
    setIndex(index)
  }

  return (
    <>
      <div
        className={`h-screen w-full grid place-items-center overflow-hidden select-none ${
          values.general.name && "pointer-events-none"
        }`}
      >
        <h1 className="h-0 text-center tracking-4">
          It&apos;s time to become a <span className="animated-text">revolutionary</span>
        </h1>
        <div className="flex gap-8 justify-center items-center w-full h-full">
          <div className="hidden select-none lg:block">
            <Image
              src="/images/signup-illustration.svg"
              alt="signup-illustration"
              width={580}
              height={580}
            />
          </div>
          <SignupForm onSuccess={(val: SignUpValues) => setValues({ ...values, general: val })} />
        </div>
      </div>
      {showPopup(ABOUT) &&
        values.general.name &&
        (values.general.role === "Company" ? (
          <CompanyPopup general={values.general} />
        ) : (
          <InternPopup
            onSuccess={(val: InternValues) => handleSuccess({ ...values, intern: val }, INTERESTS)}
            initials={values.intern}
          />
        ))}
      {showPopup(INTERESTS) && values.intern.bio.length && (
        <Interests
          goBack={() => setIndex(ABOUT)}
          internValues={{ ...values.general, ...values.intern }}
        />
      )}
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

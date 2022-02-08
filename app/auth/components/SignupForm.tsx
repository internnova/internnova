import { useMutation } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import signup from "app/auth/mutations/signup"
import { Signup } from "app/auth/validations"
import Image from "next/image"
import React from "react"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)

  return (
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
        <Form
          title="Sign Up"
          submitText="Create Account"
          schema={Signup}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            try {
              await signupMutation(values)
              props.onSuccess?.()
            } catch (error: any) {
              if (error.code === "P2002" && error.meta?.target?.includes("email")) {
                // This error comes from Prisma
                return { email: "This email is already being used" }
              } else if (error.name === "USER_IS_INTERN") {
                return {
                  email:
                    "An intern is already signed up with this email, please visit intern.internnova.co to access the intern dashboard",
                }
              } else {
                return { [FORM_ERROR]: error.toString() }
              }
            }
          }}
        >
          <LabeledTextField name="name" placeholder="Name" />
          <LabeledTextField name="email" placeholder="Email" />
          <LabeledTextField name="password" placeholder="Password" type="password" />
          {/* <LabeledTextField name="description" placeholder="Description" />
        <LabeledTextField name="logo" placeholder="logo" />
        <LabeledTextField name="website" placeholder="website" /> */}
        </Form>
      </div>
    </div>
  )
}

export default SignupForm

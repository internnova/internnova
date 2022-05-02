import signupCheckEmail from "app/auth/mutations/signupCheckEmail"
import {Signup} from "app/auth/validations"
import {Form} from "app/core/components/Form"
import LabeledOptionField from "app/core/components/LabeledOptionField"
import {LabeledTextField} from "app/core/components/LabeledTextField"
import {Link, Routes, useMutation} from "blitz"
import {FORM_ERROR} from "final-form"
import React from "react"

export type SignUpValues = {
  name: string
  email: string
  password: string
  role: string
}

type SignupFormProps = {
  onSuccess: (values: SignUpValues) => void
}

export const SignupForm = ({onSuccess}: SignupFormProps) => {
  const [checkEmailMutation] = useMutation(signupCheckEmail)
  return (
    <div className="mt-20 md:mt-0">
      <Form
        submitText="Create Account"
        schema={Signup}
        initialValues={{email: "", password: ""}}
        onSubmit={async (values: SignUpValues) => {
          try {
            await checkEmailMutation({email: values.email})
            onSuccess(values)
          } catch (error) {
            if (error.name === "USER_EXISTS") {
              return {
                email: "A user is already signed up with this email, try logging in",
              }
            } else {
              return {[FORM_ERROR]: error.toString()}
            }
          }
        }}
      >
        <div className="flex items-center">
          <h2 className="pr-5 text-xl font-medium">I&apos;m a</h2>
          <LabeledOptionField
            name="role"
            values={["Student", "Company"]}
            {...{defaultValue: "Student"}}
          />
        </div>
        <LabeledTextField name="name" label="Name" />
        <LabeledTextField name="email" label="Email" />
        <LabeledTextField name="password" label="Password" type="password" />
        <div>
          Already have an account?{" "}
          <Link href={Routes.LoginPage()}>
            <a className="text-primary text-md">Login</a>
          </Link>
        </div>
      </Form>
    </div>
  )
}

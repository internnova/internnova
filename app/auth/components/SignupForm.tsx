import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form } from "app/core/components/Form"
import { Signup } from "app/auth/validations"
import { FORM_ERROR } from "final-form"
import React from "react"
import { useMutation } from "blitz"
import signupCheckEmail from "../mutations/signupCheckEmail"
import LabeledOptionField from "app/core/components/LabeledOptionField"

export type SignUpValues = {
  name: string
  email: string
  password: string
  role: string
}

type SignupFormProps = {
  onSuccess: (values: SignUpValues) => void
}

export const SignupForm = ({ onSuccess }: SignupFormProps) => {
  const [checkEmailMutation] = useMutation(signupCheckEmail)
  return (
    <Form
      submitText="Create Account"
      schema={Signup}
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values: SignUpValues) => {
        try {
          await checkEmailMutation({ email: values.email })
          onSuccess(values)
        } catch (error) {
          if (error.name === "USER_EXISTS") {
            return {
              email: "A user is already signed up with this email, try logging in",
            }
          } else {
            return { [FORM_ERROR]: error.toString() }
          }
        }
      }}
    >
      <div className="flex">
        <h2 className="pr-5 font-medium">I&apos;m a</h2>
        <LabeledOptionField
          name="role"
          values={["Student", "Company"]}
          {...{ defaultValue: "Student" }}
        />
      </div>
      <LabeledTextField name="name" placeholder="Name" />
      <LabeledTextField name="email" placeholder="Email" />
      <LabeledTextField name="password" placeholder="Password" type="password" />
    </Form>
  )
}

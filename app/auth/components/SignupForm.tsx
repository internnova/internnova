import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form } from "app/core/components/Form"
import { SignupFront } from "app/auth/validations"
import React from "react"

export type SignUpValues = {
  name: string
  email: string
  password: string
}

type SignupFormProps = {
  onSuccess: (values: SignUpValues) => void
}

export const SignupForm = ({ onSuccess }: SignupFormProps) => (
  <Form
    title="Sign Up"
    submitText="Create Account"
    schema={SignupFront}
    initialValues={{ email: "", password: "" }}
    onSubmit={async (values: SignUpValues) => onSuccess(values)}
  >
    <LabeledTextField name="name" placeholder="Name" />
    <LabeledTextField name="email" placeholder="Email" />
    <LabeledTextField name="password" placeholder="Password" type="password" />
  </Form>
)

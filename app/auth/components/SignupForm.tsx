import { useMutation } from "blitz"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import signup from "app/auth/mutations/signup"
import { Signup } from "app/auth/validations"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)

  return (
    <div>
      <h1>Create an Account</h1>

      <Form
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
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
        <LabeledTextField name="name" label="Name" placeholder="Name" />
        <LabeledTextField name="description" label="Description" placeholder="Description" />
        <LabeledTextField name="logo" label="logo" placeholder="logo" />
        <LabeledTextField name="website" label="website" placeholder="website" />
      </Form>
    </div>
  )
}

export default SignupForm

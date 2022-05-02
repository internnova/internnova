import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { AuthenticationError, Link, PromiseReturnType, Routes, useMutation } from "blitz"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    <div className="flex flex-col items-center mt-20 md:mt-0">
      <Form
        submitText="Login"
        schema={Login}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            const user = await loginMutation(values)
            props.onSuccess?.(user)
          } catch (error: any) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
            } else {
              return {
                [FORM_ERROR]:
                  "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
              }
            }
          }
        }}
      >
        <LabeledTextField name="email" placeholder="Your Email" label="Email" />
        <LabeledTextField
          name="password"
          placeholder="Your password"
          label="Password"
          type="password"
        />
        <div>
          <Link href={Routes.ForgotPasswordPage()}>
            <a className="text-[#5c6cff] text-sm">Forgot password?</a>
          </Link>
        </div>
      </Form>

      <div>
        New to Internnova?{" "}
        <Link href={Routes.SignupPage()}>
          <a className="text-[primary] text-md">Sign Up</a>
        </Link>
      </div>
    </div>
  )
}

import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType, useRouter } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)
  const router = useRouter()

  return (
    <div className="flex flex-col items-center">
      <Form
        title="Login"
        submitText="Login"
        schema={Login}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            const user = await loginMutation(values)
            props.onSuccess?.(user)
          } catch (error: any) {
            if (error instanceof AuthenticationError) {
              if (error.name === "USER_IS_INTERN") {
                router.push("https://intern.internnova.co/")
              }
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
        <LabeledTextField name="email" placeholder="Email" />
        <LabeledTextField name="password" placeholder="Password" type="password" />
        <div>
          <Link href={Routes.ForgotPasswordPage()}>
            <a className="text-[#5c6cff] text-sm">Forgot password?</a>
          </Link>
        </div>
      </Form>

      <div>
        New to Internnova?{" "}
        <Link href={Routes.SignupPage()}>
          <a className="text-[#5c6cff] text-md">Sign Up</a>
        </Link>
      </div>
    </div>
  )
}

export default LoginForm

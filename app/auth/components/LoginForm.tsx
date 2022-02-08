import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType, useRouter } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import Image from "next/image"
import { Login } from "app/auth/validations"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)
  const router = useRouter()

  return (
    <div className="h-screen overflow-hidden select-none">
      <h1 className="text-center h-0 tracking-4 pt-8">
        Welcome back <span className="animated-text">Intern!</span>
      </h1>
      <div className="h-screen w-full flex items-center justify-center select-none gap-8">
        <div className="hidden lg:block">
          <Image
            src="/images/login-illustration.svg"
            alt="login-illustration"
            width={580}
            height={580}
          />
        </div>
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
      </div>
    </div>
  )
}

export default LoginForm

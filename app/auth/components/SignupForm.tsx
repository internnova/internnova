import { useMutation } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import signup from "app/auth/mutations/signup"
import { Signup } from "app/auth/validations"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen p-28">
        <img src="/images/AuthHero.svg" alt="" id="twoTimesGif" className="w-full h-full" />
      </div>
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create An Account</h1>
          <Form
            submitText="Create Account"
            schema={Signup}
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              try {
                await signupMutation(values)
                props.onSuccess?.()
              } catch (error) {
                if (error.code === "P2002" && error.meta?.target?.includes("email")) {
                  // This error comes from Prisma
                  return { email: "This email is already being used" }
                } else {
                  return { [FORM_ERROR]: error.toString() }
                }
              }
            }}
          >
            <LabeledTextField name="email" label="Email Adress" placeholder="Enter Email Adress" />
            <LabeledTextField
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
            />
          </Form>
        </div>
      </div>
    </section>
  )
}

export default SignupForm

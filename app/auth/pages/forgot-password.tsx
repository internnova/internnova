import forgotPassword from "app/auth/mutations/forgotPassword"
import { ForgotPassword } from "app/auth/validations"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import Meta from "app/core/components/Meta"
import { BlitzPage, useMutation } from "blitz"

const ForgotPasswordPage: BlitzPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)

  return (
    <>
      <Meta title="Forgot your password?" />
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-variant-1 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen p-28">
          <img src="/images/AuthHero.svg" alt="" className="w-full h-full" />
        </div>
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Reset your Password
            </h1>

            {isSuccess ? (
              <div>
                <h2 className="text-5xl">Request Submitted</h2>
                <p className="text-variant-2">
                  If your email is in our system, you will receive instructions to reset your
                  password shortly.
                </p>
              </div>
            ) : (
              <Form
                submitText="Send Reset Password Instructions"
                schema={ForgotPassword}
                initialValues={{ email: "" }}
                onSubmit={async (values) => {
                  try {
                    await forgotPasswordMutation(values)
                  } catch (error) {
                    return {
                      [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
                    }
                  }
                }}
              >
                <LabeledTextField name="email" label="" placeholder="Email" />
              </Form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default ForgotPasswordPage

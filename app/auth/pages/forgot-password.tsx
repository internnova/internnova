import { BlitzPage, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { ForgotPassword } from "app/auth/validations"
import forgotPassword from "app/auth/mutations/forgotPassword"
import Image from "next/image"
import { Meta } from "app/core/partials/Meta"

const ForgotPasswordPage: BlitzPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)

  return (
    <>
      <Meta />
      <div className="h-screen w-full flex items-center justify-center select-none !overflow-hidden">
        <div className="grid place-items-start pl-4 lg:w-1/2">
          <div className="px-8 flex flex-col gap-2 justify-center">
            <h1>Forgot your password?</h1>
            <p>
              Enter the email you used to login to InternNova. You may need to check your spam
              folder or unblock auth@internnova.co.
            </p>
          </div>

          {isSuccess ? (
            <div className="px-8 mt-8 flex flex-col gap-2 justify-centers">
              <h2>Request Submitted</h2>
              <p>
                If your email is in our system, you will receive instructions to reset your password
                shortly.
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
                } catch (error: any) {
                  return {
                    [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
                  }
                }
              }}
            >
              <LabeledTextField name="email" placeholder="Email" />
            </Form>
          )}
        </div>
        <div className="hidden lg:block select-none">
          <Image
            src="/images/forgot-illustration.svg"
            alt="forgot-password-illustration"
            width={580}
            height={580}
          />
        </div>
      </div>
    </>
  )
}

ForgotPasswordPage.redirectAuthenticatedTo = "/"
ForgotPasswordPage.getLayout = (page) => <Layout title="Forgot Password">{page}</Layout>

export default ForgotPasswordPage

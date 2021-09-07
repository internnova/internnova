import { BlitzPage, useRouterQuery, Link, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { ResetPassword } from "app/auth/validations"
import resetPassword from "app/auth/mutations/resetPassword"

import { Routes } from ".blitz"

const ResetPasswordPage: BlitzPage = () => {
  const query = useRouterQuery()
  const [resetPasswordMutation, { isSuccess }] = useMutation(resetPassword)

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-variant-1 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen p-28">
        <img src="/images/AuthHero.svg" alt="" className="w-full h-full" />
      </div>
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Reset your Password</h1>

          {isSuccess ? (
            <div>
              <h2 className="text-5xl">Password Reset Successfully</h2>
              <p>
                Go to the{" "}
                <Link href={Routes.Home()}>
                  <a className="text-variant-2">homepage</a>
                </Link>
              </p>
            </div>
          ) : (
            <Form
              submitText="Reset Password"
              schema={ResetPassword}
              initialValues={{
                password: "",
                passwordConfirmation: "",
                token: query.token as string,
              }}
              onSubmit={async (values) => {
                try {
                  await resetPasswordMutation(values)
                } catch (error: any) {
                  if (error.name === "ResetPasswordError") {
                    return {
                      [FORM_ERROR]: error.message,
                    }
                  } else {
                    return {
                      [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
                    }
                  }
                }
              }}
            >
              <LabeledTextField name="password" label="New Password" type="password" />
              <LabeledTextField
                name="passwordConfirmation"
                label="Confirm New Password"
                type="password"
              />
            </Form>
          )}
        </div>
      </div>
    </section>
  )
}

ResetPasswordPage.getLayout = (page) => <Layout title="Reset Your Password">{page}</Layout>

export default ResetPasswordPage

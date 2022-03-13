import { BlitzPage, useRouterQuery, Link, useMutation, Routes } from "blitz"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import Layout from "app/core/layouts/Layout"
import resetPassword from "app/auth/mutations/resetPassword"
import { ResetPassword } from "app/auth/validations"

const ResetPasswordPage: BlitzPage = () => {
  const query = useRouterQuery()
  const [resetPasswordMutation, { isSuccess }] = useMutation(resetPassword)
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen select-none">
      <h1 className="px-8">Set a New Password</h1>

      {isSuccess ? (
        <div>
          <h2>Password Reset Successfully</h2>
          <p>
            Go to the <Link href={Routes.Home()}>homepage</Link>
          </p>
        </div>
      ) : (
        <Form
          submitText="Reset Password"
          schema={ResetPassword}
          initialValues={{ password: "", passwordConfirmation: "", token: query.token as string }}
          onSubmit={async (values) => {
            try {
              await resetPasswordMutation({ ...values, token: query.token as string })
            } catch (error: any) {
              if (error.name === "ResetPasswordError") {
                console.log(error)
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
          <LabeledTextField name="password" placeholder="New Password" type="password" />
          <LabeledTextField
            name="passwordConfirmation"
            placeholder="Confirm New Password"
            type="password"
          />
        </Form>
      )}
    </div>
  )
}

ResetPasswordPage.redirectAuthenticatedTo = "/"
ResetPasswordPage.getLayout = (page) => (
  <Layout title="Reset Your Password" noVerification>
    {page}
  </Layout>
)

export default ResetPasswordPage

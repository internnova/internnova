import { useMutation } from "blitz"
import sendConfirmationEmail from "../mutations/sendConfirmationEmail"
import { Popup } from "../../core/components/Popup"
import { Button } from "../../core/components/Button"
import { values } from "../pages/signup"
import internSignup from "../mutations/intern-signup"
import companySignup from "../mutations/company-signup"

export const VerifyEmail = ({ values, goBack }: { values: values; goBack(): void }) => {
  const [sendConfirmationEmailMutation, { isSuccess }] = useMutation(sendConfirmationEmail)
  let signUp
  if (values.general.role === "COMPANY") {
    signUp = companySignup
  } else signUp = internSignup
  const [signUpMutation] = useMutation(companySignup)

  return (
    <Popup title="Create account" step={2} scroll={false}>
      <div className="flex flex-col gap-5 px-8 py-10 mb-4">
        <p>
          You need to verify your email. Be sure to check <br />
          your spam folder or unblock auth@internnova.co
        </p>
        <div className="flex pt-4 flex-col gap-5 w-[80vw] sm:w-[50vw] lg:w-[35vw] xl:w-[28vw]">
          <div className="flex gap-4">
            <Button
              options="w-1/2"
              onClick={async () => {
                if (values.general.role === "COMPANY") {
                  await signUpMutation({ ...values.general, ...values.company })
                }
                await sendConfirmationEmailMutation()
              }}
            >
              Resend email
            </Button>
            <Button options="w-1/2" onClick={goBack}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </Popup>
  )
}

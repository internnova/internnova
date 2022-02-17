import { useMutation } from "blitz"
import sendConfirmationEmail from "../mutations/sendConfirmationEmail"
import { Popup } from "../../core/components/Popup"
import { Button } from "../../core/components/Button"
import { values } from "../pages/signup"
import internSignup from "../mutations/intern-signup"
import companySignup from "../mutations/company-signup"

export const VerifyEmail = ({ values }: { values: values | undefined }) => {
  const [sendConfirmationEmailMutation, { isSuccess }] = useMutation(sendConfirmationEmail)
  let signUp = values.role === "COMPANY" ? companySignup : internSignup
  const signUpMutation = useMutation(signUp)

  return (
    <Popup title="Create account" step={2} scroll={false}>
      <div className="flex flex-col gap-5 px-8 py-10 mb-4">
        <p>You need to verify your email.</p>
        <div className="flex pt-4 flex-col gap-5 w-[80vw] sm:w-[50vw] lg:w-[35vw] xl:w-[28vw]">
          <Button
            onClick={async () => {
              await signUpMutation(values)
              await sendConfirmationEmailMutation()
            }}
          >
            Resend email
          </Button>{" "}
        </div>
      </div>
    </Popup>
  )
}

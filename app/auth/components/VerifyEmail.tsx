import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { useMutation } from "blitz"
import sendConfirmationEmail from "../mutations/sendConfirmationEmail"
import { Popup } from "../../core/components/Popup"

export const VerifyEmail = () => {
  const [sendConfirmationEmailMutation, { isSuccess }] = useMutation(sendConfirmationEmail)

  return (
    <Popup title="Create account" step={2} total={2}>
      <div className="">
        You need to verify your email.{" "}
        <button
          onClick={async () => {
            await sendConfirmationEmailMutation()
          }}
        >
          Click here
        </button>{" "}
        to resend the email
      </div>
    </Popup>
  )
}

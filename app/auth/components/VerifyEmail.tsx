import { useMutation, useRouter } from "blitz"
import sendConfirmationEmail from "../mutations/sendConfirmationEmail"
import { Popup } from "../../core/components/Popup"
import { Button } from "../../core/components/Button"
import { values } from "../pages/signup"
import internSignup from "../mutations/intern-signup"
import companySignup from "../mutations/company-signup"
import { MutationFunction } from "react-query"
import { useState } from "react"
import { ErrorLabel } from "../../core/components/ErrorLabel"
import { useCurrentUser } from "../../core/hooks/useCurrentUser"

export const VerifyEmail = ({ values, goBack }: { values: values; goBack(): void }) => {
  const isCompany = values.general.role === "Company"
  const text = "Resend Email"

  return (
    <Popup title="Create account" step={3} scroll={false}>
      <div className="flex flex-col gap-5 px-8 py-10 mb-4">
        <p>
          You need to verify your email. Be sure to check <br />
          your spam folder or unblock auth@internnova.co
        </p>

        <div className="flex gap-4 items-center w-[80vw] sm:w-[50vw] lg:w-[35vw] xl:w-[28vw]">
          {isCompany ? (
            <Verify
              text={text}
              mutation={companySignup as MutationFunction}
              values={{ ...values.general, ...values.company }}
            />
          ) : (
            <Verify
              text={text}
              mutation={internSignup as MutationFunction}
              values={{ ...values.general, ...values.intern }}
            />
          )}

          <Button options="w-1/2" onClick={goBack}>
            Back
          </Button>
        </div>
      </div>
    </Popup>
  )
}

const Verify = ({
  text,
  mutation,
  values,
  ...props
}: {
  text: string
  mutation: MutationFunction
  values: any
}) => {
  const [sendConfirmationEmailMutation, { isSuccess }] = useMutation(sendConfirmationEmail)
  const [signUpMutation] = useMutation(mutation)
  const [error, setError] = useState<string | null>(null)
  const user = useCurrentUser()

  return (
    <div className="flex flex-col w-1/2">
      <Button
        {...props}
        onClick={() => {
          ;(async () => {
            try {
              if (values && values.name && !user) await signUpMutation(values)
              await sendConfirmationEmailMutation(values.role)
            } catch (error) {
              setError(error.message)
            }
          })()
        }}
      >
        {text}
      </Button>
      {error ? <ErrorLabel error={error} /> : null}
    </div>
  )
}

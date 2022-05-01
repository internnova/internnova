import {Spinner} from "app/core/components/Spinner"
import {useMutation} from "blitz"
import {useState} from "react"
import {MutationFunction} from "react-query"
import {Button} from "app/core/components/Button"
import {ErrorLabel} from "app/core/components/ErrorLabel"
import {Popup} from "app/core/components/Popup"
import {useCurrentUser} from "app/core/hooks/useCurrentUser"
import companySignup from "app/auth/mutations/company-signup"
import internSignup from "app/auth/mutations/intern-signup"
import sendConfirmationEmail from "app/auth/mutations/sendConfirmationEmail"
import {values} from "app/auth/pages/signup"

export const VerifyEmail = ({values, goBack}: {values: values; goBack(): void}) => {
  const isCompany = values.general.role === "Company"
  const text = "Resend Email"

  return (
    <Popup title="Create account" step={3} scroll={false}>
      <div className="flex flex-col gap-5 py-10 px-8 mb-4">
        <p>
          You need to verify your email. Be sure to check <br />
          your spam folder or unblock auth@internnova.co
        </p>

        <div className="flex gap-4 items-center w-[80vw] sm:w-[50vw] lg:w-[35vw] xl:w-[28vw]">
          {isCompany ? (
            <Verify
              text={text}
              mutation={companySignup as MutationFunction}
              values={{...values.general, ...values.company}}
            />
          ) : (
            <Verify
              text={text}
              mutation={internSignup as MutationFunction}
              values={{...values.general, ...values.intern}}
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
  const [sendConfirmationEmailMutation, {isSuccess}] = useMutation(sendConfirmationEmail)
  const [loading, setLoading] = useState(false)
  const [signUpMutation] = useMutation(mutation)
  const [error, setError] = useState<string | null>(null)
  const user = useCurrentUser()

  return (
    <div className="flex flex-col w-1/2">
      {!loading ? (
        <Button
          {...props}
          onClick={() => {
            setLoading(true)
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
      ) : (
        <Spinner small />
      )}
      {error ? <ErrorLabel error={error} /> : null}
    </div>
  )
}

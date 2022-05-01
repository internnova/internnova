import { BlitzPage, useRouterQuery, useMutation, useRouter } from "blitz"
import { Spinner } from "app/core/components/Spinner"
import Layout from "app/core/layouts/Layout"
import confirmEmail from "app/auth/mutations/confirmEmail"
import { useState } from "react"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { Popup } from "app/core/components/Popup"
import { Button } from "app/core/components/Button"

const ConfirmPassswordPage: BlitzPage = () => {
  const query = useRouterQuery()
  const router = useRouter()
  const user = useCurrentUser()
  const [error, setError] = useState<string | null>(null)
  const [resetPasswordMutation, { isSuccess }] = useMutation(confirmEmail)

  if (user && user.verified) {
    router.push("/")
    return <Spinner />
  }

  if (isSuccess) {
    router.push("/")
    return <></>
  } else {
    return (
      <>
        {error && !isSuccess && <p>{error}</p>}
        <Popup title="Confirm your email" scroll={false} {...{ style: { height: "30ch" } }}>
          <div className="flex flex-col gap-6 py-10 px-8 mb-4">
            <p>Please confirm your email address by clicking the button below.</p>
            <Button
              options="w-full"
              onClick={async () => {
                try {
                  await resetPasswordMutation({ token: query.token as string })
                } catch (error: any) {
                  if (error.name === "ResetPasswordError") {
                    setError(error.message)
                  } else {
                    setError("An unexpected error occurred")
                  }
                }
              }}
            >
              Verify
            </Button>
          </div>
        </Popup>
      </>
    )
  }
}

ConfirmPassswordPage.getLayout = (page) => (
  <Layout title="Verify Email" noVerification>
    {page}
  </Layout>
)

export default ConfirmPassswordPage

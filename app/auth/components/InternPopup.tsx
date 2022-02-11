import { Popup } from "app/core/components/Popup"
import { UploadAvatar } from "app/core/components/UploadAvatar"
import Form from "../../core/components/Form"
import signUp from "../mutations/signup"
import { SignupPopup } from "../validations"
import { PopupProps } from "./CompanyPopup"
import LabeledTextArea from "../../core/components/LabeledTextArea"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { useMutation } from "react-query"

export const InternPopup = ({ signUpValues, onSuccess }: PopupProps) => {
  const [signUpMutation] = useMutation(signUp)
  let source = ""

  return (
    <Popup title="Create account" step={1} total={2}>
      <Form
        schema={SignupPopup}
        options=""
        submitText="Next"
        initialValues={{ description: "", website: "" }}
        onSubmit={async (values) => {
          await signUpMutation({ ...signUpValues, ...values, logo: source })
          onSuccess()
        }}
      >
        <div className="grid place-items-center w-full pb-4">
          <UploadAvatar source={source} />
        </div>
        <LabeledTextArea name="description" placeholder="Description" />
        <LabeledTextField name="website" placeholder="Website" />
      </Form>
    </Popup>
  )
}

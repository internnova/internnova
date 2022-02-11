import Form from "../../core/components/Form"
import { SignupPopup } from "../validations"
import { SignUpValues } from "./SignupForm"
import signUp from "../mutations/signup"
import { useMutation } from "blitz"
import { LabeledTextField } from "../../core/components/LabeledTextField"
import React from "react"
import LabeledTextArea from "../../core/components/LabeledTextArea"
import { Popup } from "../../core/components/Popup"
import { UploadAvatar } from "app/core/components/UploadAvatar"

export interface PopupProps {
  signUpValues: SignUpValues
  onSuccess(): void
}

export const CompanyPopup = ({ signUpValues, onSuccess }: PopupProps) => {
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
          if (source === "") {
            return { logo: "Please upload a logo" }
          }
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

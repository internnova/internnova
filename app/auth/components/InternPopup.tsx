import { Popup } from "app/core/components/Popup"
import { UploadAvatar } from "app/core/components/UploadAvatar"
import Form from "../../core/components/Form"
import internSignup from "../mutations/intern-signup"
import { Intern } from "../validations"
import { PopupProps } from "./CompanyPopup"
import LabeledTextArea from "../../core/components/LabeledTextArea"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { useMutation } from "blitz"
import LabeledOptionField from "../../core/components/LabeledOptionField"
import { ChangeEvent } from "react"

export const InternPopup = ({ signUpValues, onSuccess }: PopupProps) => {
  const [signUpMutation] = useMutation(internSignup)

  return (
    <Popup title="Create account" step={1} total={2}>
      <Form
        schema={Intern}
        options=""
        submitText="Next"
        initialValues={{ bio: "", interests: [], oneliner: "" }}
        onSubmit={async (values) => {
          await signUpMutation({ ...values, ...signUpValues })
          onSuccess()
        }}
      >
        <div className="grid place-items-center w-full pb-4">
          <UploadAvatar />
        </div>
        <LabeledTextArea name="bio" placeholder="Bio" />
        <LabeledOptionField
          name="interests"
          values={["Web dev", "AI/ML", "Systems", "Game dev", "Startups", "IoT", "Trading"]}
          {...{ multiple: true, type: "select" }}
          onSelection={(e: ChangeEvent<HTMLInputElement>, value: Array<string>) => {
            if (value.find((v) => v === e.target.value)) {
              return value.filter((v) => v !== e.target.value)
            } else {
              return [...value, e.target.value]
            }
          }}
        />
        <LabeledTextField name="oneliner" placeholder="Describe yourself in a line" />
      </Form>
    </Popup>
  )
}

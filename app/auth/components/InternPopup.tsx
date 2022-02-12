import { Popup } from "app/core/components/Popup"
import { defaultSrc, UploadAvatar } from "app/core/components/UploadAvatar"
import Form from "../../core/components/Form"
import internSignup from "../mutations/intern-signup"
import { Intern } from "../validations"
import { PopupProps } from "./CompanyPopup"
import LabeledTextArea from "../../core/components/LabeledTextArea"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { useMutation } from "blitz"
import LabeledOptionField from "../../core/components/LabeledOptionField"

export const InternPopup = ({ signUpValues, onSuccess }: PopupProps) => {
  const [signUpMutation] = useMutation(internSignup)

  return (
    <Popup title="Create account" step={1} total={2}>
      <Form
        schema={Intern}
        options=""
        submitText="Next"
        initialValues={{ bio: "", interests: [""], oneliner: "" }}
        onSubmit={(values: any) => {
          // console.log(values.files[0])
          // console.log({ ...values, ...signUpValues, logo: values.files[0] })
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
        />
        <LabeledTextField name="oneliner" placeholder="Describe yourself in a line" />
      </Form>
    </Popup>
  )
}

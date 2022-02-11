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
import { SyntheticEvent, useState } from "react"

export const InternPopup = ({ signUpValues, onSuccess }: PopupProps) => {
  const [interests, setInterests] = useState<string[]>([])
  const [signUpMutation] = useMutation(internSignup)
  let source = ""

  return (
    <Popup title="Create account" step={1} total={2}>
      <Form
        schema={Intern}
        options=""
        submitText="Next"
        initialValues={{ bio: "", interests: "", oneliner: "" }}
        onSubmit={async (values) => {
          await signUpMutation({ ...signUpValues, ...values, avatar: source })
          onSuccess()
        }}
      >
        <div className="grid place-items-center w-full pb-4">
          <UploadAvatar source={source} />
        </div>
        <LabeledTextArea name="bio" placeholder="Bio" />
        <div>
          {interests.map((interest) => {
            return <span key={interest}>{interest}</span>
          })}
        </div>
        <LabeledOptionField
          name="interests"
          values={[
            "Web development",
            "AI/ML",
            "Systems",
            "Game development",
            "Startups",
            "Robotics/IoT",
            "Trading",
          ]}
          onSelect={(e) =>
            setInterests((prevState) => {
              if (prevState.includes(e.target.value)) {
                return prevState
              } else {
                return [...prevState, e.target.value]
              }
            })
          }
        />
        <LabeledTextField name="oneliner" placeholder="Describe yourself in a line" />
      </Form>
    </Popup>
  )
}

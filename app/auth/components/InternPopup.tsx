import { Popup } from "app/core/components/Popup"
import { UploadAvatar } from "app/core/components/UploadAvatar"
import Form from "../../core/components/Form"
import { Intern } from "../validations"
import LabeledTextArea from "../../core/components/LabeledTextArea"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { InternValues } from "../pages/signup"

export const InternPopup = ({
  onSuccess,
  initials: { bio, oneliner, username },
}: {
  onSuccess(values): void
  initials: InternValues
}) => {
  return (
    <Popup title="Create account" step={1} scroll={false}>
      <Form
        schema={Intern}
        submitText="Next"
        initialValues={{ bio, oneliner, username }}
        onSubmit={(values) => {
          onSuccess(values)
        }}
      >
        <div className="grid place-items-center pb-4 w-full">
          <UploadAvatar />
        </div>
        <LabeledTextField name="username" placeholder="Enter a unique username" />
        <LabeledTextArea name="bio" placeholder="Bio" />
        <LabeledTextField name="oneliner" placeholder="Describe yourself in a line" />
      </Form>
    </Popup>
  )
}

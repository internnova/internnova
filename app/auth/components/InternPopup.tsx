import { Popup } from "app/core/components/Popup"
import { UploadAvatar } from "app/core/components/UploadAvatar"
import Form from "../../core/components/Form"
import { Intern } from "../validations"
import LabeledTextArea from "../../core/components/LabeledTextArea"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { InternValues } from "../pages/signup"

export const InternPopup = ({
  onSuccess,
  initials: { bio, oneliner },
}: {
  onSuccess(values): void
  initials: InternValues
}) => {
  return (
    <Popup title="Create account" step={1} scroll={false}>
      <Form
        schema={Intern}
        options=""
        submitText="Next"
        initialValues={{ bio, oneliner }}
        onSubmit={(values) => {
          onSuccess(values)
        }}
      >
        <div className="grid place-items-center w-full pb-4">
          <UploadAvatar />
        </div>
        <LabeledTextArea name="bio" placeholder="Bio" />
        <LabeledTextField name="oneliner" placeholder="Describe yourself in a line" />
      </Form>
    </Popup>
  )
}

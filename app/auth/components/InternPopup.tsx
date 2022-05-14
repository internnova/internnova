import { InternValues } from "app/auth/pages/signup"
import { Intern } from "app/auth/validations"
import Form from "app/core/components/Form"
import LabeledTextArea from "app/core/components/LabeledTextArea"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Popup } from "app/core/components/Popup"
import { UploadAvatar } from "app/core/components/UploadAvatar"

export const InternPopup = ({
  onSuccess,
  initials: { bio, oneliner, username },
}: {
  onSuccess(values): void
  initials: InternValues
}) => {
  return (
    <Popup title="Create account" step={1} scroll={true}>
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
        <LabeledTextField name="username" label="Username" placeholder="Enter a unique username" />
        <LabeledTextArea name="bio" placeholder="A little about yourself/your background" />
        <LabeledTextField
          name="oneliner"
          label="One liner"
          placeholder="Describe yourself in a line"
        />
      </Form>
    </Popup>
  )
}

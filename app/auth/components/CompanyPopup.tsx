import Form from "../../core/components/Form"
import { Company } from "../validations"
import { LabeledTextField } from "../../core/components/LabeledTextField"
import LabeledTextArea from "../../core/components/LabeledTextArea"
import { Popup } from "../../core/components/Popup"
import { UploadAvatar } from "app/core/components/UploadAvatar"
import { CompanyValues } from "../pages/signup"

export const CompanyPopup = ({
  onSuccess,
  initials: { description, website },
}: {
  onSuccess(values): void
  initials: CompanyValues
}) => {
  return (
    <Popup title="Create account" step={1} scroll={false}>
      <Form
        schema={Company}
        options=""
        submitText="Next"
        initialValues={{ description, website }}
        onSubmit={(values) => {
          onSuccess(values)
        }}
      >
        <div className="grid place-items-center w-full pb-4">
          <UploadAvatar />
        </div>
        <LabeledTextArea name="description" placeholder="Description" />
        <LabeledTextField name="website" placeholder="Website" />
      </Form>
    </Popup>
  )
}

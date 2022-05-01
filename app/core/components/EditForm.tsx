import { z } from "zod"
import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { UploadAvatar } from "app/core/components/UploadAvatar"

export { FORM_ERROR } from "app/core/components/Form"

interface EditFormProps<S extends z.ZodType<any, any>> extends FormProps<S> {
  isCompany?: boolean
}

export function EditForm<S extends z.ZodType<any, any>>({ isCompany, ...props }: EditFormProps<S>) {
  return (
    <Form<S> {...props}>
      <div className="grid place-items-center pb-4 w-full">
        <UploadAvatar />
      </div>
      <LabeledTextField name="name" placeholder="Name" />
      <LabeledTextField name="username" placeholder="Username" />
      {isCompany ? (
        <LabeledTextField name="website" placeholder="Website" />
      ) : (
        <LabeledTextField name="oneliner" placeholder="Describe yourself in a line" />
      )}
    </Form>
  )
}

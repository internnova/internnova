import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextareaField } from "app/core/components/LabeledTextareaField"
import { z } from "zod"
export { FORM_ERROR } from "app/core/components/Form"

export function JobApplicationForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextareaField
        name="description"
        label="Why should you be considered?"
        placeholder="Description"
      />
    </Form>
  )
}

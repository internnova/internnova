import {Form, FormProps} from "app/core/components/Form"
import LabeledTextarea from "app/core/components/LabeledTextArea"
import {z} from "zod"
export {FORM_ERROR} from "app/core/components/Form"

export function JobApplicationForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextarea name="description" placeholder="Description" />
    </Form>
  )
}

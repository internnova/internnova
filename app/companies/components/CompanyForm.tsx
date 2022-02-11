import { z } from "zod"
import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"

export { FORM_ERROR } from "app/core/components/Form"

export function CompanyForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Name" placeholder="Name" />
      <LabeledTextField name="description" label="Description" placeholder="Description" />
      <LabeledTextField name="website" label="Website" placeholder="Website" />
      <LabeledTextField name="logo" label="Logo" placeholder="Logo" />
    </Form>
  )
}

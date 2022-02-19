import { JobType, Tag } from "db"
import { z } from "zod"
import { Form, FormProps } from "app/core/components/Form"
import { LabeledOptionField } from "app/core/components/LabeledOptionField"
import { LabeledTextField } from "app/core/components/LabeledTextField"

export { FORM_ERROR } from "app/core/components/Form"

export function JobForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="position" label="Position" placeholder="Position" />
      <LabeledTextField name="description" label="Description" placeholder="Description" />
      <LabeledOptionField
        name="industry"
        label="Job Industry"
        placeholder="Job Industry"
        values={Object.values(Tag)}
      />
      <LabeledTextField name="location" label="location" placeholder="Location" />
      <LabeledTextField name="salary" label="salary" placeholder="salary" />
      <LabeledTextField name="duration" label="duration" placeholder="Duration" />
      <LabeledTextField
        name="skillsRequired"
        label="skillsRequired"
        placeholder="Skills Required"
      />
      <LabeledOptionField
        name="jobType"
        label="Job Type"
        placeholder="Job Type"
        values={Object.values(JobType)}
      />
    </Form>
  )
}

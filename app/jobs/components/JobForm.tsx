import { JobType, Tag } from "db"
import { z } from "zod"
import { Form, FormProps } from "app/core/components/Form"
import { LabeledOptionField } from "app/core/components/LabeledOptionField"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import LabeledTextArea from "../../core/components/LabeledTextArea"

export { FORM_ERROR } from "app/core/components/Form"

export const convertValues = (values: string[]) =>
  values.map((value) => value.toLowerCase().replace(/_/g, " "))

export function JobForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField
        name="position"
        label="Position"
        placeholder="Eg: Frontend dev/Fullstack dev"
      />
      <LabeledTextArea name="description" placeholder="Describe the job" />
      <LabeledOptionField
        name="industry"
        placeholder="Job Industry"
        fields={convertValues(Object.values(Tag))}
        values={Object.values(Tag)}
      />
      <LabeledTextField name="location" label="Location" placeholder="Eg: Remote/United States" />
      <LabeledTextField
        name="salary"
        label="Salary"
        placeholder="In dollars"
        type="number"
        min={0}
      />
      <LabeledTextField
        name="duration"
        label="Duration"
        placeholder="Months"
        type="number"
        min={1}
      />
      <LabeledTextField
        name="skillsRequired"
        label="Skills Required"
        placeholder="Separated by a comma"
      />
      <LabeledOptionField
        name="jobType"
        placeholder="Job Type"
        fields={convertValues(Object.values(JobType))}
        values={Object.values(JobType)}
      />
    </Form>
  )
}

import { Form, FormProps } from "app/core/components/Form"
import { LabeledOptionField } from "app/core/components/LabeledOptionField"
import LabeledTextArea from "app/core/components/LabeledTextArea"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { JobType, Tag } from "db"
import { z } from "zod"

export { FORM_ERROR } from "app/core/components/Form"

export const convertValues = (values: string[]) =>
  values.map((value) => value.toLowerCase().replace(/_/g, " "))

export function JobForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  const user = useCurrentUser()

  return (
    <Form<S>
      {...props}
      initialValues={{
        industry: Tag.Marketing,
        jobType: JobType.PART_TIME,
        ...props.initialValues,
      }}
    >
      <LabeledTextField
        name="position"
        label="Position"
        placeholder="Eg: Frontend dev/Fullstack dev"
      />
      {user?.username === "internnova" && (
        <LabeledTextField
          name="displayName"
          label="Display Name for company"
          placeholder="Only for InternNova account"
        />
      )}
      <LabeledTextArea name="description" placeholder="Describe the job" label="Job Description" />
      <LabeledOptionField
        name="industry"
        placeholder="Job Industry"
        fields={convertValues(Object.values(Tag))}
        values={Object.values(Tag)}
      />
      <LabeledTextField name="location" label="Location" placeholder="Eg: Remote/United States" />
      <LabeledTextField name="salary" label="Salary" placeholder="In INR" type="number" min={0} />
      <LabeledTextField
        name="duration"
        label="Duration (in months)"
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

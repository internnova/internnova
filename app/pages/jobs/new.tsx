import Layout from "app/core/layouts/Layout"
import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import { z } from "zod"
import { JobForm, FORM_ERROR } from "app/jobs/components/JobForm"
import createJob, { CreateJobClient } from "app/jobs/mutations/createJob"

const NewJobPage: BlitzPage = () => {
  const router = useRouter()
  const [createJobMutation] = useMutation(createJob)

  return (
    <div>
      <h1>Create New Job</h1>

      <JobForm
        submitText="Create Job"
        schema={CreateJobClient}
        onSubmit={async (values) => {
          try {
            const job = await createJobMutation({
              ...values,
              skillsRequired: values.skillsRequired.split(", "),
            })
            router.push(Routes.ShowJobPage({ jobId: job.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.JobsPage()}>
          <a>Jobs</a>
        </Link>
      </p>
    </div>
  )
}

NewJobPage.getLayout = (page) => <Layout title={"Create New Job"}>{page}</Layout>

export default NewJobPage

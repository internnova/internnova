import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { z } from "zod"
import createJob, { CreateJobClient } from "app/jobs/mutations/createJob"
import { JobForm, FORM_ERROR } from "app/jobs/components/JobForm"

const NewJobPage: BlitzPage = () => {
  const router = useRouter()
  const [createJobMutation] = useMutation(createJob)
  const clientSkills = z.object({ skillsRequired: z.string() })

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

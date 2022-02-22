import Layout from "app/core/layouts/Layout"
import {FORM_ERROR, JobApplicationForm} from "app/job-applications/components/JobApplicationForm"
import createJobApplication, {
  CreateJobApplication,
} from "app/job-applications/mutations/createJobApplication"
import getJob from "app/jobs/queries/getJob"
import {BlitzPage, Link, Routes, useMutation, useParam, useQuery, useRouter} from "blitz"

const NewJobApplicationPage: BlitzPage = () => {
  const router = useRouter()
  const jobId = useParam("jobId", "number")
  const [job, {setQueryData}] = useQuery(
    getJob,
    {id: jobId},
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [createJobApplicationMutation] = useMutation(createJobApplication)

  return (
    <div>
      <h1>Create New JobApplication</h1>

      <JobApplicationForm
        submitText="Create JobApplication"
        schema={CreateJobApplication}
        onSubmit={async (values) => {
          try {
            if (job) {
              const jobApplication = await createJobApplicationMutation({...values, jobId: job.id})
              if (jobApplication) {
                router.push(Routes.ShowJobApplicationPage({jobApplicationId: jobApplication.id}))
              } else {
                throw new Error("Application creation failed")
              }
            } else {
              throw new Error("Job not found")
            }
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.JobApplicationsPage()}>
          <a>JobApplications</a>
        </Link>
      </p>
    </div>
  )
}

NewJobApplicationPage.authenticate = true
NewJobApplicationPage.getLayout = (page) => (
  <Layout title={"Create New JobApplication"}>{page}</Layout>
)

export default NewJobApplicationPage

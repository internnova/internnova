import Layout from "app/core/layouts/Layout"
import { FORM_ERROR, JobApplicationForm } from "app/job-applications/components/JobApplicationForm"
import createJobApplication, {
  CreateJobApplication,
} from "app/job-applications/mutations/createJobApplication"
import getJob from "app/jobs/queries/getJob"
import { JobApplicationsList } from "app/pages/job-applications"
import { BlitzPage, Routes, useMutation, useParam, useQuery, useRouter, useSession } from "blitz"

const NewJobApplicationPage: BlitzPage = () => {
  const router = useRouter()
  const jobSlug = useParam("jobSlug", "string")
  const session = useSession()
  const [job] = useQuery(
    getJob,
    { slug: jobSlug },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [createJobApplicationMutation] = useMutation(createJobApplication)

  if (
    job?.applications &&
    session.userId &&
    !job.applications.map((application) => application.internId).includes(session.userId) &&
    session.role === "INTERN"
  ) {
    return (
      <div className="pt-8 pb-6 px-4 sm:px-6 md:px-8">
        <div>
          <h2 className="font-medium">Create Job Application</h2>
        </div>

        <div className="w-1/2">
          <JobApplicationForm
            submitText="Create Job Application"
            schema={CreateJobApplication}
            onSubmit={async (values) => {
              try {
                if (job) {
                  const jobApplication = await createJobApplicationMutation({
                    ...values,
                    jobId: job.id,
                    position: job.position,
                    slug: job.slug,
                  })
                  if (jobApplication) {
                    const { slug } = jobApplication
                    router.push(
                      Routes.ShowJobApplicationPage({
                        slug: slug,
                        companyName: job.companyName,
                      })
                    )
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
        </div>
      </div>
    )
  } else {
    return (
      <Layout>
        <p>You cannot apply to this job.</p>
      </Layout>
    )
  }
}

NewJobApplicationPage.authenticate = true
NewJobApplicationPage.getLayout = (page) => <Layout title="Create Job Application">{page}</Layout>

export default NewJobApplicationPage

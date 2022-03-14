import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getJobApplication from "app/job-applications/queries/getJobApplication"
import updateJobApplication, {
  UpdateJobApplication,
} from "app/job-applications/mutations/updateJobApplication"
import { JobApplicationForm, FORM_ERROR } from "app/job-applications/components/JobApplicationForm"

export const EditJobApplication = () => {
  const router = useRouter()
  const jobApplicationId = useParam("jobApplicationId", "number")
  const [jobApplication, { setQueryData }] = useQuery(
    getJobApplication,
    { id: jobApplicationId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateJobApplicationMutation] = useMutation(updateJobApplication)
  if (!jobApplication) {
    router.push("/job-applications")
    return <></>
  } else {
    return (
      <>
        <Head>
          <title>Edit JobApplication {jobApplication.id}</title>
        </Head>

        <div>
          <h1>Edit JobApplication {jobApplication.id}</h1>
          <pre>{JSON.stringify(jobApplication, null, 2)}</pre>

          <JobApplicationForm
            submitText="Update JobApplication"
            schema={UpdateJobApplication}
            initialValues={jobApplication}
            onSubmit={async (values) => {
              try {
                const updated = await updateJobApplicationMutation({
                  ...values,
                  id: jobApplication.id,
                })
                await setQueryData(updated)
                router.push(Routes.ShowJobApplicationPage({ jobApplicationId: updated.id }))
              } catch (error: any) {
                console.error(error)
                return {
                  [FORM_ERROR]: error.toString(),
                }
              }
            }}
          />
        </div>
      </>
    )
  }
}

const EditJobApplicationPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditJobApplication />
      </Suspense>

      <p>
        <Link href={Routes.JobApplicationsPage()}>
          <a>JobApplications</a>
        </Link>
      </p>
    </div>
  )
}

EditJobApplicationPage.authenticate = true
EditJobApplicationPage.getLayout = (page) => <Layout intern>{page}</Layout>

export default EditJobApplicationPage

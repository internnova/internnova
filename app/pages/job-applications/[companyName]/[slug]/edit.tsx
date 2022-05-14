import { Spinner } from "app/core/components/Spinner"
import Layout from "app/core/layouts/Layout"
import { JobApplicationForm, FORM_ERROR } from "app/job-applications/components/JobApplicationForm"
import updateJobApplication, {
  UpdateJobApplication,
} from "app/job-applications/mutations/updateJobApplication"
import getJobApplication from "app/job-applications/queries/getJobApplication"
import { Head, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import { Suspense } from "react"

export const EditJobApplication = () => {
  const router = useRouter()
  const companyName = useParam("companyName", "string")
  const slug = useParam("slug", "string")
  const [jobApplication, { setQueryData }] = useQuery(
    getJobApplication,
    { slug, companyName },
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
          <title>Edit JobApplication @{jobApplication.job.companyName}</title>
        </Head>

        <div className="pt-8 pb-6">
          <h1>Edit JobApplication @{jobApplication.job.companyName}</h1>
          <JobApplicationForm
            submitText="Update Application"
            schema={UpdateJobApplication}
            initialValues={jobApplication}
            onSubmit={async (values) => {
              try {
                const updated = await updateJobApplicationMutation({
                  ...values,
                  id: jobApplication.id,
                })
                await setQueryData(updated)
                router.push(
                  Routes.ShowJobApplicationPage({
                    slug: updated.slug,
                    companyName: updated.job.companyName,
                  })
                )
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
    <Suspense fallback={<Spinner />}>
      <main className="px-4 sm:px-6 md:px-8">
        <EditJobApplication />
      </main>
    </Suspense>
  )
}

EditJobApplicationPage.authenticate = true
EditJobApplicationPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditJobApplicationPage

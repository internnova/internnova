import Layout from "app/core/layouts/Layout"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import { Suspense } from "react"
import updateJobApplication from "app/job-applications/mutations/updateJobApplication"
import getJobApplication from "app/job-applications/queries/getJobApplication"
import { Spinner } from "../../../../core/components/Spinner"

export const JobApplication = () => {
  const companyName = useParam("companyName", "string")
  const slug = useParam("slug", "string")
  const [updateJobApplicationMutation] = useMutation(updateJobApplication)
  const [jobApplication] = useQuery(getJobApplication, { slug, companyName })

  return (
    <>
      <Head>
        <title>Review Job Application</title>
      </Head>

      <div>
        <h1>JobApplication {jobApplication.id}</h1>
        <pre>{JSON.stringify(jobApplication, null, 2)}</pre>
        {/*create a button that sets the application status to reject*/}
        <button
          onClick={() =>
            updateJobApplicationMutation({
              id: jobApplication.id,
              status: "REJECTED",
            })
          }
        >
          Reject
        </button>
        <button
          onClick={() =>
            updateJobApplicationMutation({
              id: jobApplication.id,
              status: "HIRED",
            })
          }
        >
          Accept
        </button>
      </div>
    </>
  )
}

const ShowJobApplicationPage: BlitzPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <JobApplication />
    </Suspense>
  )
}

ShowJobApplicationPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowJobApplicationPage

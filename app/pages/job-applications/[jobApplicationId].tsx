import Layout from "app/core/layouts/Layout"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import { Suspense } from "react"
import updateJobApplication from "app/job-applications/mutations/updateJobApplication"
import getJobApplication from "app/job-applications/queries/getJobApplication"

export const JobApplication = () => {
  const router = useRouter()
  const jobApplicationId = useParam("jobApplicationId", "number")
  const [updateJobApplicationMutation] = useMutation(updateJobApplication)
  const [jobApplication] = useQuery(getJobApplication, { id: jobApplicationId })

  return (
    <>
      <Head>
        <title>JobApplication {jobApplication.id}</title>
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
    <div>
      <p>
        <Link href={Routes.Home()}>
          <a>JobApplications</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <JobApplication />
      </Suspense>
    </div>
  )
}

ShowJobApplicationPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowJobApplicationPage

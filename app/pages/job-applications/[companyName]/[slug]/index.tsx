import {Button} from "app/core/components/Button"
import {Spinner} from "app/core/components/Spinner"
import {useCurrentUser} from "app/core/hooks/useCurrentUser"
import Layout from "app/core/layouts/Layout"
import updateJobApplication from "app/job-applications/mutations/updateJobApplication"
import getJobApplication from "app/job-applications/queries/getJobApplication"
import getUser from "app/users/queries/getUser"
import {BlitzPage, Head, Link, useMutation, useParam, useQuery} from "blitz"
import {Suspense} from "react"

export const JobApplication = () => {
  const companyName = useParam("companyName", "string")
  const slug = useParam("slug", "string")
  const [updateJobApplicationMutation] = useMutation(updateJobApplication)
  const [{status, position, description, id, internId}] = useQuery(getJobApplication, {
    slug,
    companyName,
  })
  const [user] = useQuery(getUser, {where: {id: internId}})
  const currentUser = useCurrentUser()

  return (
    <>
      <Head>
        <title>Review Job Application</title>
      </Head>

      <div>
        <div className="pt-8 pb-6">
          <h2 className="sm:inline-flex font-medium">
            <p className="pr-2">Job Application</p>
            <Link href={`/${user.username}`}>
              <a className="tracking-[1px]">@{user.username}</a>
            </Link>
          </h2>
        </div>
        <div className="pb-6 leading-[1.5]">
          <div className="pb-4">
            <h3 className="font-medium">Applicant Details:</h3>
            <p className="sm:text-md">Name: {user.name}</p>
            <p className="sm:text-md">Email: {user.email}</p>
          </div>
          <div className="leading-[1.8]">
            <h3 className="font-medium">Job Details:</h3>
            <p className="sm:text-md">Position to apply: {position}</p>
            <div className="sm:text-md">
              <h4 className="font-medium">Why {user.name} wants to apply:</h4>
              <p className="leading-[1.6] long-text">{description}</p>
            </div>
          </div>
        </div>
        {/*create a button that sets the application status to reject*/}
        {currentUser?.role === "COMPANY" && status === "APPLIED" ? (
          <div className="inline-flex gap-2">
            <Button
              options="px-2"
              onClick={() =>
                updateJobApplicationMutation({
                  id,
                  status: "REJECTED",
                })
              }
            >
              Reject
            </Button>
            <Button
              options="px-2"
              onClick={() =>
                updateJobApplicationMutation({
                  id,
                  status: "HIRED",
                })
              }
            >
              Accept
            </Button>
          </div>
        ) : null}
      </div>
    </>
  )
}

const ShowJobApplicationPage: BlitzPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <main className="px-4 sm:px-6 md:px-8">
        <JobApplication />
      </main>
    </Suspense>
  )
}

ShowJobApplicationPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowJobApplicationPage

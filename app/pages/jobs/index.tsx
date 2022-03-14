import Layout from "app/core/layouts/Layout"
import getJobs from "app/jobs/queries/getJobs"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import { Suspense } from "react"
import { useCurrentUser } from "../../core/hooks/useCurrentUser"

const ITEMS_PER_PAGE = 100

export const JobsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ jobs, hasMore }] = usePaginatedQuery(getJobs, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Link href={Routes.ShowJobPage({ jobId: job.id })}>
              <a>{job.position}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

const JobsPage: BlitzPage = () => {
  const user = useCurrentUser()

  return (
    <>
      <Head>
        <title>Jobs</title>
      </Head>
      <main>
        {user && user.role === "COMPANY" ? (
          <div>
            <p>
              <Link href={Routes.NewJobPage()}>
                <a>Create Job</a>
              </Link>
            </p>
          </div>
        ) : (
          <></>
        )}

        <Suspense fallback={<div>Loading...</div>}>
          <JobsList />
        </Suspense>
      </main>
    </>
  )
}

JobsPage.getLayout = (page) => <Layout>{page}</Layout>

export default JobsPage

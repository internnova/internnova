import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getJobApplications from "app/job-applications/queries/getJobApplications"

const ITEMS_PER_PAGE = 100

export const JobApplicationsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ jobApplications, hasMore }] = usePaginatedQuery(getJobApplications, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {jobApplications.map((jobApplication) => (
          <li key={jobApplication.id}>
            <Link href={Routes.ShowJobApplicationPage({ jobApplicationId: jobApplication.id })}>
              <a>{jobApplication.name}</a>
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

const JobApplicationsPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>JobApplications</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewJobApplicationPage()}>
            <a>Create JobApplication</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <JobApplicationsList />
        </Suspense>
      </div>
    </>
  )
}

JobApplicationsPage.authenticate = true
JobApplicationsPage.getLayout = (page) => <Layout>{page}</Layout>

export default JobApplicationsPage

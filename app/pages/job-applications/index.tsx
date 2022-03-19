import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getJobApplications from "app/job-applications/queries/getJobApplications"
import { Spinner } from "../../core/components/Spinner"
import { useIntern } from "../../core/hooks/useIntern"

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

  if (jobApplications.length === 0) {
    return (
      <div>
        <div className="grid justify-center place-center mt-10 gap-6 select-none">
          <div
            style={{
              backgroundImage: "url(/images/no-applications.svg)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="h-[300px] w-[300px]"
          />
          <div>
            <h2 className="text-center">No applications yet</h2>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2>Your applications:</h2>
      <div>
        {jobApplications.map((jobApplication) => (
          <li key={jobApplication.id}>
            <Link href={Routes.ShowJobApplicationPage({ jobApplicationId: jobApplication.id })}>
              <a>{jobApplication.job.position}</a>
            </Link>
          </li>
        ))}
      </div>

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
    <Suspense fallback={<Spinner />}>
      <JobApplicationsList />
    </Suspense>
  )
}

JobApplicationsPage.authenticate = true
JobApplicationsPage.getLayout = (page) => <Layout title="Job Applications">{page}</Layout>

export default JobApplicationsPage

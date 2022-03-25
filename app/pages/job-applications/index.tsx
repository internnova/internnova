import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes, Image } from "blitz"
import Layout from "app/core/layouts/Layout"
import getJobApplications from "app/job-applications/queries/getJobApplications"
import { Spinner } from "../../core/components/Spinner"
import { JobApplication } from "app/core/components/JobApplication"

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
      <div className="h-screen grid justify-center place-center select-none">
        <Image
          src="/images/no-applications.svg"
          alt="No Job Applications"
          width={300}
          height={300}
        />
        <div>
          <h2 className="text-center">No applications yet</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-8">
      <div className="pb-6">
        <h2>Your applications:</h2>
      </div>
      <div className="flex flex-col gap-6 pb-6">
        {jobApplications.map((jobApplication) => (
          <JobApplication jobApplication={jobApplication} key={`${jobApplication.id}`} />
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
      <main className="px-4 sm:px-6 md:px-8">
        <JobApplicationsList />
      </main>
    </Suspense>
  )
}

JobApplicationsPage.authenticate = true
JobApplicationsPage.getLayout = (page) => <Layout title="Job Applications">{page}</Layout>

export default JobApplicationsPage

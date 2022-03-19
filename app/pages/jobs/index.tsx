import Layout from "app/core/layouts/Layout"
import getJobs from "app/jobs/queries/getJobs"
import { usePaginatedQuery, useRouter, BlitzPage, Routes, Image } from "blitz"
import { Suspense } from "react"
import { Job } from "../../core/components/Job"
import { Spinner } from "../../core/components/Spinner"
import { BsCaretRight, BsCaretLeft } from "react-icons/bs"

export const ITEMS_PER_PAGE = 100

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

  if (jobs.length === 0) {
    return (
      <div className="h-[90vh] grid place-center overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-6">
          <Image
            src="/images/jobs-not-found.svg"
            alt="No jobs listed"
            className="select-none"
            height={400}
            width={400}
          />
          <h2 className="font-light">No jobs currently listed. Visit again later!</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-4 flex flex-col gap-4">
      <h2>Available Jobs: </h2>
      <div>
        {jobs.map((job) => (
          <Job key={`${job.id}`} job={job} at />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button disabled={page === 0} onClick={goToPreviousPage}>
          <BsCaretLeft className="h-[24px] w-[24px]" />
        </button>
        <button disabled={!hasMore} onClick={goToNextPage}>
          <BsCaretRight className="h-[24px] w-[24px]" />
        </button>
      </div>
    </div>
  )
}

const JobsPage: BlitzPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <JobsList />
    </Suspense>
  )
}

JobsPage.getLayout = (page) => <Layout title="Jobs">{page}</Layout>

export default JobsPage

import { Job } from "app/core/components/Job"
import { SearchJob } from "app/core/components/SearchJob"
import { Spinner } from "app/core/components/Spinner"
import Layout from "app/core/layouts/Layout"
import getJobs from "app/jobs/queries/getJobs"
import { slugify } from "app/pages/[userName]"
import { searchJob } from "app/pages/jobs/s/[jobInterest]"
import { usePaginatedQuery, useRouter, BlitzPage, Routes, Image } from "blitz"
import { Suspense, useState } from "react"
import { BsSearch, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"

export const ITEMS_PER_PAGE = 100

export const JobsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [search, setSearch] = useState<string>("")
  const [searching, setSearching] = useState<boolean>(search.trim().length > 0)
  const [{ jobs, hasMore }] = usePaginatedQuery(getJobs, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  const redirectToSearch = () => {
    if (searching) {
      router.push(Routes.SearchJobPage({ jobInterest: slugify(search).trim() }))
    }
  }

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
    <main className="px-4 sm:px-6 md:px-8">
      <div className="pt-8 pb-6">
        <h2>Available Jobs: </h2>
      </div>
      <div className="relative flex flex-col w-full sm:w-full lg:w-[60%] xl:w-[40%]">
        <div className="flex items-center mb-6">
          <input
            className={`appearance-none px-5 py-2 md:text-[15px] search w-full ${
              searching && "rounded-b-none"
            }`}
            placeholder="Search for internships"
            value={search}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                redirectToSearch()
              }
            }}
            onChange={(e) => {
              setSearch(e.target.value)
              setSearching(e.target.value.trim().length > 0)
            }}
          />
          <div
            className={`bg-[rgba(0,0,0,0.05)] border-[transparent] md:border-neutral-200 p-3 grid place-center cursor-pointer rounded-r-md ${
              searching && "rounded-b-none"
            }`}
            style={{ borderWidth: "1px", borderStyle: "solid" }}
            onClick={redirectToSearch}
          >
            <BsSearch className="text-[14px] md:text-[15px]" />
          </div>
        </div>
        {searching && (
          <div className="absolute bg-white rounded-b-md w-full align-baseline top-[4ch] z-[100] shadow-md">
            {jobs
              .filter((job) => searchJob(Object.values(job) as string[], search))
              .map((job) => (
                <SearchJob key={job.id} job={job} />
              ))}
          </div>
        )}
      </div>
      <div className="mb-6 flex flex-col gap-6 w-full">
        {jobs.map((job) => (
          <Job key={`${job.id}`} job={job} />
        ))}
      </div>
      {page !== 0 || hasMore ? (
        <div className="flex items-center justify-center gap-4">
          <button disabled={page === 0} onClick={goToPreviousPage}>
            <BsFillArrowLeftCircleFill className="h-[20px] w-[20px]" />
          </button>
          <button disabled={!hasMore} onClick={goToNextPage}>
            <BsFillArrowRightCircleFill className="h-[20px] w-[20px]" />
          </button>
        </div>
      ) : null}
    </main>
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

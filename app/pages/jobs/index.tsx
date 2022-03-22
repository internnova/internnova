import Layout from "app/core/layouts/Layout"
import getJobs from "app/jobs/queries/getJobs"
import { usePaginatedQuery, useRouter, BlitzPage, Routes, Image } from "blitz"
import { Suspense, useState } from "react"
import { Job } from "../../core/components/Job"
import { Spinner } from "../../core/components/Spinner"
import { BsCaretRight, BsCaretLeft, BsSearch } from "react-icons/bs"
import { SearchJob } from "../../core/components/SearchJob"
import { convertValues } from "../../jobs/components/JobForm"
import { slugify } from "../[userName]"

export const ITEMS_PER_PAGE = 100

export const JobsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [search, setSearch] = useState<string>("")
  const [searching, setSearching] = useState<boolean>(!!search)
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
    <div className="mx-4 sm:mx-6 md:mx-8">
      <div className="pt-8 pb-6">
        <h2>Available Jobs: </h2>
      </div>
      <div className="relative flex flex-col w-full sm:w-1/2 md:w-[40%]">
        <div className="flex items-center mb-6 overflow-hidden h-[3.8ch] sm:h-[4ch]">
          <input
            className={`appearance-none px-5 py-2 md:text-[15px] search w-full ${
              searching && "rounded-b-none"
            }`}
            placeholder="Search for internships"
            value={search}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                router.push(Routes.SearchJobPage({ jobInterest: slugify(search) }))
              }
            }}
            onChange={(e) => {
              setSearch(e.target.value)
              setSearching(!!e.target.value)
            }}
          />
          <div
            className={`bg-[rgba(0,0,0,0.05)] p-3 grid place-center cursor-pointer rounded-r-md ${
              searching && "rounded-b-none"
            }`}
            style={{ border: "1px solid rgb(225, 225, 225)" }}
          >
            <BsSearch className="text-sm md:text-[15px]" />
          </div>
        </div>
        {searching && (
          <div className="absolute bg-white rounded-b-md w-full align-baseline top-[4ch] z-[100] shadow-md">
            {jobs
              .filter(
                (job) =>
                  job.position.toLowerCase().includes(search.toLowerCase()) ||
                  job.description.toLowerCase().includes(search.toLowerCase()) ||
                  job.industry.toLowerCase().includes(search.toLowerCase()) ||
                  job.location.toLowerCase().includes(search.toLowerCase())
              )
              .map((job) => (
                <SearchJob key={job.id} job={job} />
              ))}
          </div>
        )}
      </div>
      <div className="mb-6 flex flex-col gap-6">
        {jobs.map((job) => (
          <Job key={`${job.id}`} job={job} />
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

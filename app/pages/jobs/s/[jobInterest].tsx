import {BlitzPage, usePaginatedQuery, useParam, useRouter, Head} from "blitz"
import {Suspense} from "react"
import getJobs from "app/jobs/queries/getJobs"
import Layout from "app/core/layouts/Layout"
import {Spinner} from "app/core/components/Spinner"
import {Job} from "app/core/components/Job"

const ITEMS_PER_PAGE = 10

const unslugify = (str: string) => {
  return str.toLowerCase().replace("-", " ")
}

export const searchJob = (query: string[], searchTerm: string) => {
  return unslugify(query.join(" ")).includes(searchTerm)
}

export const SearchJobs = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const term = useParam("jobInterest", "string")
  const [{jobs, hasMore}] = usePaginatedQuery(getJobs, {
    orderBy: {id: "asc"},
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  if (!term) return <h2 className="pt-8">No term listed to be searched</h2>

  const searchTerm = unslugify(term)

  return (
    <>
      <Head>
        <title>{searchTerm} | Jobs</title>
      </Head>
      <div className="pt-8 pb-6">
        <h2>Searching jobs which include &quot;{searchTerm}&quot;</h2>
      </div>
      <div className="flex flex-col gap-6">
        {jobs
          .filter((job) => searchJob(Object.values(job) as string[], searchTerm))
          .map((job) => (
            <Job key={`${job.id}`} job={job} />
          ))}
      </div>
    </>
  )
}

const SearchJobPage: BlitzPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <main className="px-4 sm:px-6 md:px-8">
        <SearchJobs />
      </main>
    </Suspense>
  )
}

SearchJobPage.getLayout = (page) => <Layout>{page}</Layout>

export default SearchJobPage

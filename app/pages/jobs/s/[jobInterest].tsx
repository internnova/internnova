import { BlitzPage, usePaginatedQuery, useParam, useRouter, Head } from "blitz"
import { Suspense } from "react"
import getJobs from "../../../jobs/queries/getJobs"
import Layout from "../../../core/layouts/Layout"

const ITEMS_PER_PAGE = 100

export const Job = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const jobInterest = useParam("jobInterest", "string")
  const [{ jobs, hasMore }] = usePaginatedQuery(getJobs, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  return (
    <>
      <Head>
        <title>{jobInterest} | Jobs</title>
      </Head>
      <div>
        <h1>Job</h1>
        {jobs.map((job) => {
          return (
            job.skillsRequired.includes(jobInterest as string) && (
              <div>
                {/*<h2>{job.title}</h2>*/}
                <p>{job.description}</p>
              </div>
            )
          )
        })}
      </div>
    </>
  )
}

const SearchJobPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Job />
      </Suspense>
    </div>
  )
}

SearchJobPage.getLayout = (page) => <Layout>{page}</Layout>

export default SearchJobPage

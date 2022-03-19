import Layout from "app/core/layouts/Layout"
import getJobs from "app/jobs/queries/getJobs"
import { BlitzPage, Router, usePaginatedQuery, useRouter } from "blitz"
import { Suspense } from "react"
import { Spinner } from "app/core/components/Spinner"
import { useIntern } from "../core/hooks/useIntern"
import { useCurrentUser } from "../core/hooks/useCurrentUser"
import { Job } from "../core/components/Job"

const ITEMS_PER_PAGE = 3

export const JobsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ jobs, hasMore }] = usePaginatedQuery(getJobs, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  return (
    <div className="mt-10 flex flex-col gap-4">
      <h1>Recommended for you:</h1>
      <div>
        {jobs.map((job) => (
          <Job job={job} key={`${job.id}`} />
        ))}
      </div>
    </div>
  )
}

const Home: BlitzPage = () => {
  const router = useRouter()
  router.push("/job-applications")
  return <Suspense fallback={<Spinner />} />
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home

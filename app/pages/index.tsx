import Layout from "app/core/layouts/Layout"
import getJobs from "app/jobs/queries/getJobs"
import {
  BlitzPage,
  Image,
  Link,
  Routes,
  useMutation,
  usePaginatedQuery,
  useRouter,
  useSession,
} from "blitz"
import { Suspense } from "react"
import { Spinner } from "app/core/components/Spinner"
import { useIntern } from "../core/hooks/useIntern"

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
    <div className="mt-10">
      <h1>Recommended for you:</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Link href={Routes.ShowJobPage({ jobId: job.id })}>
              <a>{job.position}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Applications = () => {
  const { jobApplications } = useIntern()
  return (
    <div>
      {jobApplications.length === 0 ? (
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
      ) : (
        <div>
          <h2>Your applications:</h2>
          {jobApplications.map((jobApplication) => (
            <div key={jobApplication.id}>
              {/*<h2>{jobApplication.title}</h2>*/}
              <p>{jobApplication.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const Home: BlitzPage = () => (
  <main>
    <div className="buttons pt-4">
      <Suspense fallback={<Spinner />}>
        <Applications />
        <JobsList />
      </Suspense>
    </div>
  </main>
)

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home

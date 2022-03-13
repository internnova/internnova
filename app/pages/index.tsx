import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Layout from "app/core/layouts/Layout"
import getJobs from "app/jobs/queries/getJobs"
import { BlitzPage, Image, Link, Routes, useMutation, usePaginatedQuery, useRouter } from "blitz"
import { Suspense } from "react"
import { Spinner } from "app/core/components/Spinner"
import { useState } from "react"
import { BsPerson, BsFillMoonFill, BsSearch, BsBookmark } from "react-icons/bs"
import { IoSettingsOutline } from "react-icons/io5"
import { Nav } from "../core/components/Nav"
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
    <div>
      Recommended for you:
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
  const intern = useIntern()
  return <div>Your applications: {intern?.userId}</div>
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

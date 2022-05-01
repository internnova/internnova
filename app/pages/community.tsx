import { Intern } from "app/core/components/Intern"
import { Spinner } from "app/core/components/Spinner"
import Layout from "app/core/layouts/Layout"
import getInterns from "app/interns/queries/getInterns"
import { BlitzPage, usePaginatedQuery, useRouter } from "blitz"
import { Suspense } from "react"

const ITEMS_PER_PAGE = 10

export const Community = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ interns, hasMore }] = usePaginatedQuery(getInterns, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })
  return (
    <div className="pb-6">
      <div className="py-8">
        <h2>Community</h2>
        <p>Discover other ambitious interns</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xsl:grid-cols-3 justify-items-center gap-6">
        {interns.map((intern) => (
          <Intern key={intern.id} intern={intern} />
        ))}
      </div>
    </div>
  )
}

const CommunityPage: BlitzPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <main className="px-4 sm:px-6 md:px-8">
        <Community />
      </main>
    </Suspense>
  )
}

CommunityPage.getLayout = (page) => <Layout title="Community">{page}</Layout>

export default CommunityPage

import { BlitzPage, usePaginatedQuery } from "blitz"
import { Suspense } from "react"
import { Spinner } from "../core/components/Spinner"
import Layout from "../core/layouts/Layout"
import { Job } from "../core/components/Job"
import { useBookmark } from "../core/contexts/BookmarkProvider"

export const Bookmark = ({ bookmarks }) => (
  <div>
    <div className="mb-6">
      <h2 className="font-medium">Your Bookmarks</h2>
    </div>
    <div className="flex flex-col gap-6">
      {bookmarks.map((job) => (
        <Job job={job} key={`${job.id}`} />
      ))}
    </div>
  </div>
)

const BookmarkPage: BlitzPage = () => {
  const { bookmarks } = useBookmark()

  return (
    <Suspense fallback={<Spinner />}>
      <main className="pt-8 pb-6 px-4 sm:px-6 md:px-8">
        <Bookmark bookmarks={bookmarks} />
      </main>
    </Suspense>
  )
}

BookmarkPage.getLayout = (page) => <Layout title="Bookmarks">{page}</Layout>

export default BookmarkPage

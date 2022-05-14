import { Job } from "app/core/components/Job"
import { Spinner } from "app/core/components/Spinner"
import { useBookmark } from "app/core/contexts/BookmarkProvider"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, Image, usePaginatedQuery } from "blitz"
import { Suspense } from "react"

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

  if (bookmarks.length === 0) {
    return (
      <div className="h-[90vh] grid place-center overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-6">
          <Image
            src="/images/no-bookmarks.svg"
            alt="No jobs listed"
            className="select-none"
            height={400}
            width={400}
          />
          <h2 className="font-light">Bookmark your favourite internships now!</h2>
        </div>
      </div>
    )
  }

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

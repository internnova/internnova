import {Link, useMutation} from "blitz"
import {
  BsCodeSlash,
  BsGeoAlt,
  BsBriefcase,
  BsCurrencyDollar,
  BsBookmarks,
  BsBookmarksFill,
  BsPencilSquare,
} from "react-icons/bs"
import {Button} from "app/core/components/Button"
import {useCurrentUser} from "app/core/hooks/useCurrentUser"
import {useState} from "react"
import {useBookmark} from "app/core/contexts/BookmarkProvider"
import {Job as JobTypePrisma} from "@prisma/client"

export interface JobType extends JobTypePrisma {}

interface JobProps {
  at?: boolean
  job: JobType
}

export const Job = ({
  at,
  job: {position, description, industry, location, jobType, salary, companyName, slug, ...job},
}: JobProps) => {
  const user = useCurrentUser()
  const {bookmarks, setBookmarks} = useBookmark()
  const hasBookmarked = bookmarks.find((bookmark) => bookmark.slug === slug)
  const [isBookmarked, setIsBookmarked] = useState<boolean>(!!hasBookmarked)

  return (
    <div className="relative">
      <Link href={`/jobs/${companyName}/${slug}`}>
        <a className="flex justify-between bg-white hover:bg-gray-50 rounded-md shadow-md">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="truncate text-md font-medium text-black">{position}</p>
            </div>
            <p className="pt-1 pb-2 text-sm">{description.slice(0, 60)}...</p>
            <div className="mt-2">
              <div className="sm:flex sm:gap-4">
                <p className="flex items-center text-sm gap-1">
                  <BsCodeSlash className="h-[16px] w-[16px]" />
                  {industry}
                </p>
                <p className="flex items-center text-sm gap-1">
                  <BsGeoAlt className="h-[16px] w-[16px]" />
                  {location}
                </p>
                <p className="flex items-center text-sm gap-2">
                  <BsBriefcase className="h-[16px] w-[16px]" />
                  {jobType.toLowerCase().replace(/_/g, " ")}
                </p>
                <p className="flex items-center text-sm">
                  <BsCurrencyDollar className="h-[16px] w-[16px]" />
                  {salary}
                </p>
                {at && (
                  <span className="flex items-center text-sm">
                    <p>@</p>
                    {companyName}
                  </span>
                )}
              </div>
              <div className="pt-4 flex items-center gap-2">
                <p className="text-sm text-gray-600">
                  <span className="text-gray-500">Posted:</span>{" "}
                  {new Date(job.postedAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="text-gray-500">Duration:</span> {job.duration} month(s)
                </p>
              </div>
            </div>
          </div>
          {user?.username === companyName && (
            <Link href={`/jobs/${companyName}/${slug}/edit`}>
              <a className="absolute top-4 right-0 mr-4 cursor-pointer">
                <BsPencilSquare className="h-[24px] w-[24px]" />
              </a>
            </Link>
          )}
          <div className="p-4 self-end">
            <Button options="px-2">View Internship</Button>
          </div>
        </a>
      </Link>
      {user?.role === "INTERN" && (
        <div
          className="absolute top-[-6px] right-0 mr-4 cursor-pointer"
          onClick={async () => {
            setIsBookmarked((prevState) => !prevState)
            if (!hasBookmarked) {
              setBookmarks((prev) => [
                ...prev,
                {
                  position,
                  slug,
                  description,
                  companyName,
                  industry,
                  location,
                  jobType,
                  salary,
                  ...job,
                },
              ])
            } else {
              if (bookmarks.filter((bookmark) => bookmark.slug !== slug).length === 0) {
                localStorage.setItem("bookmarks", JSON.stringify([]))
              }
              setBookmarks((prev) => prev.filter((bookmark) => bookmark.slug !== slug))
            }
          }}
        >
          {isBookmarked ? (
            <BsBookmarksFill className="h-[24px] w-[24px] text-indigo-500" />
          ) : (
            <BsBookmarks className="h-[24px] w-[24px] hover:text-indigo-500" />
          )}
        </div>
      )}
    </div>
  )
}

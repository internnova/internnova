import { Job as JobTypePrisma } from "@prisma/client"
import { Button } from "app/core/components/Button"
import { useBookmark } from "app/core/contexts/BookmarkProvider"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { Link, useMutation } from "blitz"
import { useState } from "react"
import {
  BsCodeSlash,
  BsGeoAlt,
  BsBriefcase,
  BsCurrencyDollar,
  BsBookmarks,
  BsBookmarksFill,
  BsPencilSquare,
} from "react-icons/bs"

export interface JobType extends JobTypePrisma {}

interface JobProps {
  at?: boolean
  job: JobType
}

export const Job = ({
  at,
  job: { position, description, industry, location, jobType, salary, companyName, slug, ...job },
}: JobProps) => {
  const user = useCurrentUser()
  const { bookmarks, setBookmarks } = useBookmark()
  const hasBookmarked = bookmarks.find((bookmark) => bookmark.slug === slug)
  const [isBookmarked, setIsBookmarked] = useState<boolean>(!!hasBookmarked)

  return (
    <div className="relative my-auto">
      <Link href={`/jobs/${companyName}/${slug}`}>
        <a className="flex justify-between bg-white hover:bg-gray-50 rounded-md shadow-md">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="truncate text-md font-medium text-black">{position}</p>
            </div>
            <p className="pt-1 pb-2 text-sm lg:hidden">{description.slice(0, 60)}...</p>
            <p className="hidden lg:block pt-1 pb-2 text-sm">{description.slice(0, 300)}...</p>
            <div className="mt-2 flex sm:block">
              <div>
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
                  <p className="flex items-center text-sm">₹ {salary}</p>
                  {at && (
                    <span className="flex items-center text-sm">
                      <p>@</p>
                      {companyName}
                    </span>
                  )}
                </div>
                <div className="pt-4 flex items-center gap-8">
                  <p className="text-sm text-gray-600">
                    <p className="text-gray-500">Posted:</p>{" "}
                    {new Date(job.postedAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    <p className="text-gray-500">Duration:</p> {job.duration} month(s)
                  </p>
                </div>
              </div>
            </div>
            <Button options="px-2 mt-4">View Internship</Button>
          </div>
        </a>
      </Link>
      {user?.role === "INTERN" ? (
        <div
          className="absolute top-[18px] right-0 mr-4 hover:cursor-pointer"
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
      ) : (
        <>
          {user?.id === job.companyId && (
            <Link href={`/jobs/${companyName}/${slug}/edit`}>
              <a className="absolute top-4 right-0 mr-4 cursor-pointer">
                <BsPencilSquare className="h-[24px] w-[24px]" />
              </a>
            </Link>
          )}
        </>
      )}
    </div>
  )
}

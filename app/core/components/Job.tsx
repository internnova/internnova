import {Job as JobTypePrisma} from "@prisma/client"
import {Button} from "app/core/components/Button"
import {Popup} from "app/core/components/Popup"
import {useBookmark} from "app/core/contexts/BookmarkProvider"
import {useCurrentUser} from "app/core/hooks/useCurrentUser"
import deleteJob from "app/jobs/mutations/deleteJob"
import {Link, useMutation} from "blitz"
import {useState} from "react"
import {
  BsCodeSlash,
  BsGeoAlt,
  BsBriefcase,
  BsTrashFill,
  BsBookmarks,
  BsBookmarksFill,
  BsPencilSquare,
} from "react-icons/bs"
import {QueryObserverBaseResult} from "react-query"

export interface JobType extends JobTypePrisma {}

interface JobProps {
  at?: boolean
  job: JobType
  refetch?: QueryObserverBaseResult["refetch"]
  setPopupVisible?: (boolean) => void
  popupVisible?: boolean
}

export const Job = ({
  at,
  refetch,
  job: {position, description, industry, location, jobType, salary, companyName, slug, ...job},
}: JobProps) => {
  const [popupVisible, setPopupVisible] = useState<boolean>(false)
  const [deleteJobMutation] = useMutation(deleteJob)
  const user = useCurrentUser()
  const {bookmarks, setBookmarks} = useBookmark()
  const hasBookmarked = bookmarks.find((bookmark) => bookmark.slug === slug)
  const [isBookmarked, setIsBookmarked] = useState<boolean>(!!hasBookmarked)

  return (
    <div className="relative my-auto">
      {popupVisible ? (
        <Popup
          title="Confirm deletion"
          scroll={false}
          {...{style: {height: "25ch", width: "35ch"}}}
        >
          <div className="flex flex-col gap-6 py-10 px-8 mb-4">
            <div className="">
              Are you sure you want to delete this job? This action is not reverable.
            </div>
            <Button
              onClick={async () => {
                await deleteJobMutation({id: job.id})
                refetch && (await refetch())
                setPopupVisible && setPopupVisible(false)
              }}
            >
              Delete
            </Button>
          </div>
        </Popup>
      ) : (
        <></>
      )}

      <Link href={`/jobs/${companyName}/${slug}`}>
        <a className="flex justify-between bg-white hover:bg-gray-50 rounded-md shadow-md">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="truncate text-md font-medium text-black">{position}</p>
            </div>
            <p className="pt-1 pb-2 text-sm lg:hidden short-text">
              {description.replace("\n", "")?.slice(0, 60)}...
            </p>
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
                  {salary && parseInt(salary) > 100 && (
                    <p className="flex items-center text-sm">₹ {salary}/month</p>
                  )}
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
            <div className="flex absolute top-4 right-0 mr-4">
              <Link href={`/jobs/${companyName}/${slug}/edit`}>
                <a className="cursor-pointer">
                  <BsPencilSquare className="h-[24px] w-[24px]" />
                </a>
              </Link>
              {refetch && (
                <div>
                  <a
                    className="cursor-pointer pl-2"
                    onClick={() => {
                      setPopupVisible && setPopupVisible(true)
                    }}
                  >
                    <BsTrashFill className="h-[24px] w-[24px]" />
                  </a>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

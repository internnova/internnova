import { Link } from "blitz"
import { BsCodeSlash, BsGeoAlt, BsBriefcase, BsCurrencyDollar } from "react-icons/bs"

export interface JobType {
  id: number
  position: string
  companyName: string
  description: string
  location: string
  salary: string | null
  industry: string
  jobType: string
  slug: string
}

interface JobProps {
  at?: boolean
  job: JobType
}

export const Job = ({
  at,
  job: { position, description, industry, location, jobType, salary, companyName, slug },
}: JobProps) => {
  return (
    <Link href={`/jobs/${companyName}/${slug}`}>
      <a
        className="flex justify-between bg-white hover:bg-gray-50"
        style={{ border: "1px solid rgba(23,23,23,0.2)" }}
      >
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="truncate text-sm font-medium text-black">{position}</p>
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
                <p className="flex items-center text-sm gap-1">
                  <p>@</p>
                  {companyName}
                </p>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

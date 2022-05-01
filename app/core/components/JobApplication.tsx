import {Link, Image} from "blitz"
import {BsPencilSquare} from "react-icons/bs"
import {useCurrentUser} from "app/core/hooks/useCurrentUser"

export const JobApplication = ({
  jobApplication: {
    job: {companyName},
    position,
    description,
    status,
    createdAt,
    slug,
  },
}) => {
  const user = useCurrentUser()
  const isCompany = user?.role === "COMPANY"
  const basePath = `/job-applications/${companyName}/${slug}`
  return (
    <Link href={isCompany ? basePath : `${basePath}/edit`}>
      <a className="relative flex bg-white hover:bg-gray-50 rounded-md shadow-md py-4 px-2">
        <div className="flex w-full">
          <div className="hidden md:flex justify-center items-center basis-[10%]">
            <Image
              src="/images/default_profile.png"
              alt="intern_avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="grow">
              <div className="flex flex-col">
                <p className="sm:text-md">
                  Application @{companyName} as a {position}
                </p>
              </div>

              <div className="py-2">
                <p className="sm:text-sm">{description.slice(0, 60)}...</p>
              </div>
            </div>
            <div className="flex gap-4">
              <p className="text-gray-500">Status: {status}</p>
              <p className="text-gray-500">
                Applied at: {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          {!isCompany ? (
            <div className="absolute top-4 right-0 mr-4 cursor-pointer">
              <BsPencilSquare className="h-[24px] w-[24px]" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </a>
    </Link>
  )
}

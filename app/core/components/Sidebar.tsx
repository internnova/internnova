import { Link, Image } from "blitz"
import { BsBriefcase, BsSearch, BsGear } from "react-icons/bs"
import { useCurrentUser } from "../hooks/useCurrentUser"

export const Sidebar = () => {
  const user = useCurrentUser()
  return (
    <div className="flex w-14 flex-col lg:w-56">
      <div className="flex h-0 flex-1 flex-col border-r border-gray-200 bg-white">
        <div className="flex flex-1 flex-col overflow-y-auto pt-3 pb-4 lg:pt-5">
          <Link href="/job-applications">
            <a className="px-4">
              <div className="lg:hidden block">
                <Image src="/favicons/logo.png" alt="logo" height={24} width={24} />
              </div>
              <p className="md:hidden lg:inline text-lg">internnova.co</p>
            </a>
          </Link>
          <nav className="mt-2 flex-1 space-y-1 bg-white px-2 lg:mt-5">
            <Link href="/community">
              <a className="text-neutral-500 hover:bg-gray-50 hover:text-neutral-900 group flex items-center gap-2 rounded-sm p-2 text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
                <span className="hidden lg:inline">Community</span>
              </a>
            </Link>
            <Link href="job-applications">
              <a className="text-neutral-500 hover:bg-gray-50 hover:text-neutral-900 group flex items-center gap-2 rounded-sm p-2 text-sm font-medium">
                <BsBriefcase className="h-[18px] w-[18px]" />
                <span className="hidden lg:inline">Job Applications</span>
              </a>
            </Link>
            <Link href="/jobs">
              <a className="text-neutral-500 hover:bg-gray-50 hover:text-neutral-900 group flex items-center gap-2 rounded-sm p-2 text-sm font-medium">
                <BsSearch className="h-[18px] w-[18px]" />
                <span className="hidden lg:inline">Find internships</span>
              </a>
            </Link>
            <Link href="/settings">
              <a className="text-neutral-500 hover:bg-gray-50 hover:text-neutral-900 group flex items-center gap-2 rounded-sm p-2 text-sm font-medium">
                <BsGear className="h-[18px] w-[18px]" />
                <span className="hidden lg:inline">Settings</span>
              </a>
            </Link>
          </nav>
          <div className="flex rounded-sm pt-2 pb-2 pl-3 pr-2 hover:bg-gray-100 lg:mx-2 lg:pl-2 cursor-pointer">
            <div className="lg:flex lg:gap-2">
              <div className="rounded-full block">
                <Image
                  src="/images/default_profile.png"
                  alt="logo"
                  height={32}
                  width={32}
                  className="rounded-full"
                />
              </div>
              <div className="hidden lg:inline">
                <p className="text-sm font-medium">
                  <span className="text-neutral-900">{user?.name}</span>
                </p>
                <p className="text-xs text-neutral-500">
                  <span className="text-neutral-900">@{user?.username}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

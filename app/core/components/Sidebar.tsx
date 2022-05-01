import {useCurrentUser} from "app/core/hooks/useCurrentUser"
import {Image, Link, Router} from "blitz"
import {useEffect, useRef, useState} from "react"
import {BsBookmark, BsBriefcase, BsGear, BsPlusLg, BsSearch} from "react-icons/bs"
import {Profile} from "app/core/components/Profile"

export const Sidebar = () => {
  const user = useCurrentUser()
  const [profile, setProfile] = useState(false)
  const profileRef = useRef<HTMLDivElement>(null)
  const router = Router.router?.route
  const isCompany = user?.role === "COMPANY"

  useEffect(() => {
    const handleClick = (e) => {
      if (!profileRef.current?.contains(e.target)) {
        setProfile(false)
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div className="flex w-14 flex-col lg:w-56">
      <div className="flex h-0 flex-1 flex-col bg-white">
        <div className="flex flex-1 flex-col overflow-y-auto pt-3 pb-4 lg:pt-5">
          <Link href="/job-applications">
            <a className="px-4">
              <div className="lg:hidden block">
                <Image src="/favicons/logo.png" alt="logo" height={24} width={24} />
              </div>
              <p className="md:hidden lg:inline text-lg">internnova</p>
            </a>
          </Link>
          <nav className="mt-2 flex-1 space-y-2 bg-white px-2 lg:mt-5">
            <Link href="/community">
              <a
                className={`hover:bg-neutral-800 hover:text-white flex justify-center lg:justify-start items-center gap-2 rounded-md p-2 text-sm font-medium ${
                  router === "/community" && "bg-neutral-700 text-white"
                }`}
              >
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
            <Link href="/job-applications">
              <a
                className={`hover:bg-neutral-800 hover:text-white flex justify-center lg:justify-start items-center gap-2 rounded-md p-2 text-sm font-medium ${
                  router === "/job-applications" && "bg-neutral-700 text-white"
                }`}
              >
                <BsBriefcase className="h-[18px] w-[18px]" />
                <span className="hidden lg:inline">Job Applications</span>
              </a>
            </Link>
            <Link href="/jobs">
              <a
                className={`hover:bg-neutral-800 hover:text-white flex justify-center lg:justify-start items-center gap-2 rounded-md p-2 text-sm font-medium ${
                  router === "/jobs" && "bg-neutral-700 text-white"
                }`}
              >
                <BsSearch className="h-[18px] w-[18px]" />
                <span className="hidden lg:inline">Find internships</span>
              </a>
            </Link>

            <Link href={isCompany ? "/jobs/create" : "/bookmark"}>
              <a
                className={`hover:bg-neutral-800 hover:text-white flex justify-center lg:justify-start items-center gap-2 rounded-md p-2 text-sm font-medium ${
                  router === ("/jobs/create" || "/bookmark") && "bg-neutral-700 text-white"
                }`}
              >
                {isCompany ? (
                  <BsPlusLg className="h-[18px] w-[18px]" />
                ) : (
                  <BsBookmark className="h-[18px] w-[18px]" />
                )}
                <span className="hidden lg:inline">{isCompany ? "Create a job" : "Bookmarks"}</span>
              </a>
            </Link>

            <Link href="/settings">
              <a
                className={`hover:bg-neutral-800 hover:text-white flex justify-center lg:justify-start items-center gap-2 rounded-md p-2 text-sm font-medium ${
                  router === "/settings" && "bg-neutral-700 text-white"
                }`}
              >
                <BsGear className="h-[18px] w-[18px]" />
                <span className="hidden lg:inline">Settings</span>
              </a>
            </Link>
          </nav>
          <div
            className="relative flex rounded-sm pt-2 pb-2 pl-3 pr-2 hover:bg-gray-100 lg:mx-2 lg:pl-2 cursor-pointer"
            ref={profileRef}
            onClick={() => setProfile((prev) => !prev)}
          >
            {profile && <Profile header={false} />}
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

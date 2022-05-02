import { Link, Router, useRouter } from "blitz"
import { BsBriefcase, BsSearch } from "react-icons/bs"

export const HomeBar = () => {
  const router = Router.route
  return (
    <nav className="fixed bottom-0 left-0 md:hidden w-screen flex items-center bg-gray-50 h-[60px] leading-[24px]">
      <div className="flex items-center justify-center w-full">
        <Link href="/community">
          <a className="flex flex-col items-center text-gray-900 rounded-lg relative min-w-0 flex-1 overflow-hidden bg-white py-2 px-2 text-center text-xs font-medium hover:bg-primary hover:text-white sm:text-sm">
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
            <span>Community</span>
          </a>
        </Link>
        <Link href="/job-applications">
          <a className="flex flex-col items-center text-gray-900 rounded-lg relative min-w-0 flex-1 overflow-hidden bg-white py-2 px-2 text-center text-xs font-medium hover:bg-primary hover:text-white sm:text-sm">
            <BsBriefcase className="h-[18px] w-[18px]" />
            <span>Job Apps</span>
          </a>
        </Link>
        <Link href="/jobs">
          <a className="flex flex-col items-center text-gray-900 rounded-lg relative min-w-0 flex-1 overflow-hidden bg-white py-2 px-2 text-center text-xs font-medium hover:bg-primary hover:text-white sm:text-sm">
            <BsSearch className="h-[18px] w-[18px]" />
            <span>Find Jobs</span>
          </a>
        </Link>
      </div>
    </nav>
  )
}

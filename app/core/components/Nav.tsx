import { Link, useMutation } from "blitz"
import { BsBookmark, BsFillMoonFill, BsPersonCircle, BsSearch } from "react-icons/bs"
import { RiSettingsLine } from "react-icons/ri"
import logout from "../../auth/mutations/logout"
import { useState } from "react"
import { useCurrentUser } from "../hooks/useCurrentUser"
import { useEffect, useRef } from "react"

export const Nav = () => {
  const [logoutMutation] = useMutation(logout)
  const [profileDD, setProfileDD] = useState(false)
  let avatar = "/images/default_profile_36.png"
  const currentUser = useCurrentUser()
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.contains(profileRef.current)) {
        setProfileDD(false)
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (

    <nav className="sticky top-0 left-0 w-full flex items-center justify-between px-16 2xl:px-[10ch] bg-gray-50 h-[60px] header">
      <div className="flex items-center gap-10">
        <Link href="/">
          <a>
            <div
              style={{ backgroundImage: "url(/favicons/logo.png)", backgroundPosition: "50%" }}
              className="h-[34px] w-[34px] object-cover"
            />
          </a>
        </Link>
        <div className="flex items-center">
          <input
            className="appearance-none px-5 md:w-60 py-2 text-[14px] search"
            placeholder="Search for internships"
          />
          <div className="bg-[rgba(0,0,0,0.05)] p-[1.2ch] grid place-center icon cursor-pointer">
            <BsSearch />
          </div>
        </div>
        <div className="flex items-center gap-6 text-[12px] lg:text-[14px] 2xl:text-[16px]">
          {currentUser && currentUser.role === "INTERN" ? (
            <Link href="/jobs">
              <a className="hover:text-indigo-600">Find Internships</a>
            </Link>
          ) : (
            <Link href="/jobs/new">
              <a className="hover:text-indigo-600">Create Job</a>
            </Link>
          )}
        </div>
      </div>
      <div className="flex items-center gap-[4ch]">
        <Link href="/bookmark">
          <a className="cursor-pointer">
            <BsBookmark className="mt-2 h-[21px] w-[21px] hover:text-indigo-600" />
          </a>
        </Link>
        <div className="relative" ref={profileRef}>
          <div
            className="h-[34px] w-[34px] rounded-full cursor-pointer hover:opacity-75"
            style={{
              backgroundImage: `url(${avatar})`,
              backgroundPosition: "50%",
            }}
            onClick={() => setProfileDD((prev) => !prev)}
          />
          <div
            className={`bg-white rounded-xl mt-2 shadow-md absolute top-8 right-0 truncate ${
              profileDD ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col cursor-pointer text-[15px] dropdown">
              <Link href={`/interns/${currentUser?.id}`}>
                <a>
                  <BsPersonCircle />
                  <p>Profile</p>
                </a>
              </Link>
              <Link href="/settings">
                <a>
                  <RiSettingsLine />
                  <p>Settings</p>
                </a>
              </Link>
              <div className="dd-div">
                <BsFillMoonFill />
                <p className="w-full">Dark Mode</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(23,23,23, 0.2)" }} />
              <div className="dd-div" onClick={() => logoutMutation()}>
                Log out
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

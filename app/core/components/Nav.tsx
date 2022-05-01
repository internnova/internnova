import { Link, Image } from "blitz"
import { BsBookmark, BsPlusLg, BsSearch } from "react-icons/bs"
import { useCurrentUser } from "../hooks/useCurrentUser"
import { Profile } from "./Profile"
import { useEffect, useRef, useState } from "react"
import { username } from "app/auth/validations"

export const Nav = () => {
  const currentUser = useCurrentUser()
  const avatar = "/images/default_profile_36.png"
  const profileRef = useRef<HTMLDivElement>(null)
  const [profileDD, setProfileDD] = useState(false)
  const isCompany = currentUser?.role === "COMPANY"
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target !== profileRef.current) {
        setProfileDD(false)
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <nav className="sticky top-0 left-0 md:hidden w-screen flex items-center justify-between px-10 bg-gray-50 h-[60px] header">
      <div className="flex items-center gap-10">
        <Link href="/job-applications">
          <a className="grid place-center">
            <Image src="/favicons/logo.png" alt="logo" height={40} width={40} />
          </a>
        </Link>
      </div>
      <div className="flex items-center gap-[2ch]">
        <Link href={isCompany ? "/jobs/create" : "/bookmark"}>
          <a className="cursor-pointer">
            {isCompany ? (
              <BsPlusLg className="mt-2 h-[18px] w-[18px] text-gray-500 hover:text-black" />
            ) : (
              <BsBookmark className="mt-2 h-[18px] w-[18px] text-gray-500 hover:text-black" />
            )}
          </a>
        </Link>
        <div className="relative">
          <div
            className="h-[34px] w-[34px] rounded-full cursor-pointer hover:opacity-75"
            style={{
              backgroundImage: `url(${avatar})`,
              backgroundPosition: "50%",
            }}
            ref={profileRef}
            onClick={() => setProfileDD((prev) => !prev)}
          />
          {profileDD && <Profile header />}
        </div>
      </div>
    </nav>
  )
}

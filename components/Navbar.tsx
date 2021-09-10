import React from "react"
import { Logo } from "./Logo"
import { useUser } from "@auth0/nextjs-auth0"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Logo />

      <div className="flex gap-2 items-center">
        <AuthSection />
      </div>
    </div>
  )
}

const AuthSection = () => {
  const { user } = useUser()
  if (!user) {
    return (
      <>
        <Link href="/api/auth/login">
          <a className="py-2 px-4 bg-transparent text-variant-2 font-semibold border border-variant-2 rounded hover:bg-variant-2 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-4 hover:shadow-lg hover:text-[#fff]">
            Login
          </a>
        </Link>
      </>
    )
  } else if (user) {
    return (
      <>
        <Link href="/api/auth/logout">
          <a className="py-2 px-4 bg-transparent text-variant-2 font-semibold border border-variant-2 rounded hover:bg-variant-2 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-4 hover:shadow-lg hover:text-[#fff]">
            Logout
          </a>
        </Link>
      </>
    )
  } else {
    return <>Loading</>
  }
}

export default Navbar

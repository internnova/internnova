import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { Link, Routes, useMutation } from "blitz"
import { Logo } from "./Logo"

const AuthSection = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className="text-variant-2 hover:underline mr-4 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.LoginPage()}>
          <button className="py-2 px-4 bg-transparent text-variant-2 font-semibold border border-variant-2 rounded hover:bg-variant-2 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-4 hover:shadow-lg">
            Login
          </button>
        </Link>
        <Link href={Routes.SignupPage()}>
          <button className="text-variant-2 hover:underline mr-4 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            <strong>Sign Up</strong>
          </button>
        </Link>
      </>
    )
  }
}

// export default Navbar
//
//
export default function Navbar() {
  return (
    <div className="w-[100%] h-14 font-montserrat flex items-center justify-between gap-2 select-none mx-2">
      <h1 className="text-2xl tracking-wide font-extrabold md:text-lg">
        <Link href={Routes.Home()}>
          <a>
            <Logo />
          </a>
        </Link>
      </h1>
      <div className="flex bg-iris-10 dark:bg-dark-bgMuted1 w-44 h-11 rounded-lg items-center justify-center gap-2">
        <AuthSection />
      </div>
    </div>
  )
}

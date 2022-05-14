import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { Link, useMutation } from "blitz"
import { BsFillMoonFill, BsPersonCircle } from "react-icons/bs"
import { HiLogout } from "react-icons/hi"
import { RiSettingsLine } from "react-icons/ri"

export const Profile = ({ header }: { header: boolean }) => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  return (
    <div
      className={`bg-white mt-2 truncate dd rounded-md z-100 ${
        header ? "absolute top-8 right-0" : "fixed bottom-20 left-2"
      }`}
      style={{ border: "1px solid #e6e6e6" }}
    >
      <div className="flex flex-col cursor-pointer text-[15px] dropdown">
        <Link href={`/${currentUser?.username}`}>
          <a>
            <BsPersonCircle className="h-[16px] w-[16px]" />
            <p>Profile</p>
          </a>
        </Link>
        <Link href="/settings">
          <a>
            <RiSettingsLine className="h-[17px] w-[17px]" />
            <p>Settings</p>
          </a>
        </Link>
        <div className="dd-div">
          <BsFillMoonFill />
          <p className="w-full">Dark Mode</p>
        </div>
        <div style={{ borderTop: "1px solid rgba(23,23,23, 0.2)" }} />
        <div className="dd-div" onClick={() => logoutMutation()}>
          <HiLogout />
          Log out
        </div>
      </div>
    </div>
  )
}

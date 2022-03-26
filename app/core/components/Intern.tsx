import { Image, Link } from "blitz"
import { Button } from "./Button"

export const Intern = ({ intern }) => {
  return (
    <Link href={`/${intern.user.username}`}>
      <a className="flex flex-col bg-white hover:bg-gray-50 rounded-xl shadow-md w-[220px] py-6">
        <div className="flex justify-center items-center pb-4">
          <Image
            src="/images/default_profile.png"
            alt="intern_avatar"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div className="grow text-center pb-1">
          <div className="flex flex-col">
            <p className="font-[500] truncate sm:text-md">{intern.user.name}</p>
            <p className="truncate sm:text-sm text-gray-500">@{intern.user.username}</p>
          </div>
          <p className="p-2 px-0 sm:text-sm">{intern.oneliner}</p>
        </div>
        <div className="text-center">
          <Button options="px-2 py-1 rounded-md">View Profile</Button>
        </div>
      </a>
    </Link>
  )
}

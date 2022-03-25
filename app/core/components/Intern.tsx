import { Image, Link } from "blitz"

export const Intern = ({ intern }) => {
  return (
    <Link href={`/${intern.user.username}`}>
      <a className="flex bg-white hover:bg-gray-50 rounded-md shadow-md py-4">
        <div className="flex w-full">
          <div className="flex justify-center items-center basis-[10%]">
            <Image
              src="/images/default_profile.png"
              alt="intern_avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="grow">
            <div className="flex flex-col">
              <p className="truncate sm:text-md">{intern.user.name}</p>
              <p className="truncate sm:text-sm">@{intern.user.username}</p>
            </div>
            <p className="p-2 px-0 sm:text-sm">{intern.bio.slice(0, 60)}...</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

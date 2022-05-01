import {Button} from "app/core/components/Button"
import {Image, Link} from "blitz"

export const Intern = ({intern}) => {
  return (
    <Link href={`/${intern.user.username}`}>
      <a className="flex md:flex-row flex-col md:gap-6 text-gray-800 rounded-md hover:bg-gray-100 shadow-lg w-[500px] p-[2em] border-solid border-[1px] border-gray-300">
        <div className="flex justify-center items-center md:items-start pb-4">
          <div className="rounded-full h-[72px] w-[72px] border-2 border-white border-solid">
            <Image
              src="/images/default_profile.png"
              alt="intern_avatar"
              width={72}
              height={72}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="grow text-center md:text-left">
          <div className="flex flex-col pb-2">
            <h2 className="font-[600] truncate md:text-lg leading-[1.1]">{intern.user.name}</h2>
            <p className="truncate tracking-[1px] text-sm">@{intern.user.username}</p>
          </div>
          <hr className="w-full md:w-1/3 my-2" />

          <p className="py-2 text-sm">{intern.bio.slice(0, 200)}</p>
        </div>
      </a>
    </Link>
  )
}

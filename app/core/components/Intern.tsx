import {Image, Link} from "blitz"
import {Button} from "app/core/components/Button"

export const Intern = ({intern}) => {
  return (
    <Link href={`/${intern.user.username}`}>
      <a className="flex md:flex-row flex-col md:gap-6 text-white bg-neutral-800 hover:bg-neutral-700 shadow-md max-w-[600px] p-[2em]">
        <div className="flex justify-center items-center md:items-start pb-4 ">
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
            <p className="font-[600] truncate md:text-lg tracking-[1px] leading-[1.1]">
              {intern.user.name}
            </p>
            <p className="truncate tracking-[1px] text-sm text-gray-100">@{intern.user.username}</p>
          </div>
          <hr className="w-full md:w-1/3 my-2" />

          <p className="font-light opacity-[0.8] py-2 text-sm">{intern.bio.slice(0, 200)}</p>
        </div>
      </a>
    </Link>
  )
}

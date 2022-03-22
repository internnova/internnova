import { JobType } from "./Job"
import { Link, Image } from "blitz"

export const SearchJob = ({ job }: { job: JobType }) => (
  <Link href={`/jobs/${job.companyName}/${job.slug}`}>
    <a className="flex p-2 hover:bg-gray-200">
      <div className="flex items-center justify-center basis-[10%]">
        <Image
          src="/images/default_profile.png"
          alt="Company logo"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
      <div className="grow flex flex-col">
        <span>{job.position}</span>
        <span className="text-sm">{job.description.slice(0, 40)}...</span>
      </div>
      <div className="flex items-center">
        <span className="text-gray-500 text-sm">{new Date(job.postedAt).toLocaleDateString()}</span>
      </div>
    </a>
  </Link>
)

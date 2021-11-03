import { Job, Company } from "@prisma/client";
import SmallButton from "../SmallButton";
import Link from "next/link";

type Props = {
  job: (Job & { company: Company }) | null;
  company: Company | null;
};

const JobPage = (props: Props) => {
  if (!props.company || !props.job) return <></>;
  return (
    <section className="bg-card-bg p-12 flex-1 rounded-md hidden lg:block">
      <article className="flex item-center justify-between mb-9">
        <div className="flex gap-4 mb-6">
          <img
            src={props.company?.logo || ""}
            className="w-16 h-16"
            alt="Job"
          />
          <div>
            <Link href={`/job?id=${props.job.id}`}>
              <a className="text-3xl mb-1 font-bold">{props.job.position}</a>
            </Link>

            <h3 className="font-bold text-xl mb-1 text-blue-500 underline">
              {props.company?.name}
            </h3>
            <p className="flex items-center gap-1 text-muted">
              <span>
                <img src="/assets/img/location.svg" alt="Location Icon" />
              </span>
              {props.job.location}
            </p>
          </div>
        </div>
        <p className="text-white">
          Posted {props.job?.postedAt.toDateString()}
        </p>
      </article>
      <div
        className="
              bg-gray-100
              flex
              justify-between
              items-center
              rounded-md
              p-6
              mb-9
            "
      >
        <article className="space-y-1">
          <h2 className="font-bold">Field</h2>
          <p className="text-muted">{props.job?.industry}</p>
        </article>
        <article className="space-y-1">
          <h2 className="font-bold">Location</h2>
          <p className="text-muted">{props.job?.location}</p>
        </article>
        <article className="space-y-1">
          <h2 className="font-bold">Salary</h2>
          <p className="text-muted">
            {props.job?.salary ? props.job?.salary : "Unpaid Internship"}
          </p>
        </article>
      </div>
      <article className="space-y-4 mb-6">
        <h3 className="text-blue-700 font-bold">Job Overview</h3>
        <p className="text-muted">{props.job?.description}</p>
      </article>
      <article className="space-y-4 mb-6">
        <h3 className="text-blue-700 font-bold">Job Requirements</h3>
        {props.job?.skillsRequired.map((skill, x) => (
          <div className="flex gap-3 text-muted" key={x}>
            <img src="/assets/img/verified-checkmark.svg" alt="Checkmark" />
            <p>{skill}</p>
          </div>
        ))}
      </article>
      <article className="space-y-4 mb-6">
        <h3 className="text-blue-700 font-bold">Company Overview</h3>
        <p className="text-muted">{props.company?.description || ""}</p>
      </article>
      <SmallButton content="Apply for the job" />
    </section>
  );
};

export default JobPage;

import { Job, Company, JobApplication } from "@prisma/client";
import Link from "next/link";
import moment from "moment";

type JobPageProps = {
  application: JobApplication | null;
  job: (Job & { company: Company }) | null;
};

const JobApplicationPage = (props: JobPageProps) => {
  const postedAt = new Date(props.job.postedAt);

  return (
    <>
      <section className="py-12 flex-1 rounded-md max-auto hidden lg:block">
        <div className="md:pr-2">
          <article className="item-center mb-9 flex justify-between">
            <div className="flex gap-4 mb-6">
              <img
                src={props.job.company?.logo || ""}
                className="hidden sm:block object-contain w-16 h-16"
                alt="Job"
              />
              <div>
                <Link href={`/job/${props.job.id}`}>
                  <a className="mb-1 text-3xl font-bold">
                    {props.job.position}
                  </a>
                </Link>

                <h3 className="mb-1 text-xl font-bold text-blue-500 underline">
                  Company: {props.job.company?.name}
                </h3>
                <p className="text-muted flex items-center gap-1">
                  <span>
                    <img src="/assets/img/location.svg" alt="Location Icon" />
                  </span>
                  {props.job.location}
                </p>
              </div>
            </div>
          </article>
          <p className="text-black pl-2 pb-4 text-md">
            Posted {moment(postedAt).fromNow()}
          </p>
          <div className="md:flex mb-9 items-center justify-between px-6 pt-4 bg-gray-100 rounded-md">
            <article className="pb-5">
              <h2 className="font-bold">Field</h2>
              <p className="text-muted">
                {props.job?.industry.replace("_", " ")}
              </p>
            </article>
            <article className="pb-5">
              <h2 className="font-bold">Location</h2>
              <p className="text-muted">{props.job?.location}</p>
            </article>
            <article className="pb-5">
              <h2 className="font-bold">Salary</h2>
              <p className="text-muted">
                {props.job?.salary ? props.job?.salary : "Unpaid Internship"}
              </p>
            </article>
          </div>
          <article className="mb-6 space-y-4">
            <h3 className="font-bold text-blue-700">Your Application</h3>
            <p className="text-muted">{props.application.description}</p>
          </article>
          <article className="mb-6 space-y-4">
            <h3 className="font-bold text-blue-700">Job Overview</h3>
            <p className="text-muted">{props.job?.description}</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default JobApplicationPage;

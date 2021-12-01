import { Job, Company } from "@prisma/client";

type JobComponentProps = {
  job: (Job & { company: Company }) | null;
};

const JobComponent = (props: JobComponentProps) => {
  // empty page if props are null
  if (!props.job?.company || !props.job) return <></>;
  return (
    <a className="lg:pointer-events-none block">
      <article className="bg-card-bg p-6 rounded-md shadow-lg">
        <div className="flex gap-4 mb-6">
          <img
            src={props.job.company?.logo || ""}
            className="max-w-12 max-h-12"
            alt="Job"
          />
          <div>
            <a
              className="mb-1 text-lg font-bold hover:underline"
              href={`/job/${props.job.id}`}
            >
              {props.job.position}
            </a>
            <p className="text-muted flex items-center gap-1">
              <span>
                <img src="/assets/img/location.svg" alt="Location Icon" />
              </span>
              {props.job.location}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-block p-3 text-sm font-bold text-blue-700 underline rounded pr-6">
              {props.job.industry.replace("_", " ")}
            </span>
          </div>
          <div className="flex pr-2">
            <p>{`Openings: ${props.job.numOfOpenings}`}</p>
          </div>
        </div>
      </article>
    </a>
  );
};

export default JobComponent;

import { Job, JobApplication, Status } from "@prisma/client";
type JobComponentProps = {
  jobApplication: JobApplication | null;
  job: Job | null;
};

type StatusTextProps = {
  status: Status;
  closed: boolean;
};

const StatusText = (props: StatusTextProps) => {
  if (closed) {
    return <p className="text-red-600">REJECTED</p>;
  }

  switch (props.status) {
    case "APPLIED":
      return <p className="text-yellow-500">APPLIED</p>;
    case "HIRED":
      return <p className="text-green-600">APPROVED</p>;
    case "REJECTED":
      return <p className="text-red-600">REJECTED</p>;
    default:
      return <p className="text-yellow-500">APPLIED</p>;
  }
};

const JobApplicationView = (props: JobComponentProps) => {
  // empty page if props are null
  if ((!props.job && !props.jobApplication) || !props.job) return <></>;

  return (
    <a className="rounded-lg block p-1 max-w-sm">
      <article className="bg-card-bg p-6 shadow-lg bg-white">
        <div>
          <a
            className="mb-1 text-lg font-bold hover:underline"
            href={`/job/${props.job.id}`}
          >
            {props.job.position} - {props.job.companyName}
          </a>
          <p className="text-muted flex items-center gap-1">
            <span>
              <img src="/assets/img/location.svg" alt="Location Icon" />
            </span>
            {props.job.location}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <StatusText
              status={props.jobApplication?.status}
              closed={props.job.closed}
            />
          </div>
          <div className="flex pr-2">
            <p>{`Openings: ${props.job.numOfOpenings}`}</p>
          </div>
        </div>
      </article>
    </a>
  );
};

export default JobApplicationView;

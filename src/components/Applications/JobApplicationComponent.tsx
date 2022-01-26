import { Company, Job, JobApplication, Status } from "@prisma/client";
import { useEffect, useState } from "react";

type JobComponentProps = {
  application: JobApplication | null;
  job: (Job & { company: Company }) | null;
  currentApplicationId: number;
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
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (props?.currentApplicationId === props.application.id) {
      setFocus(true);
    } else setFocus(false);
  }, [props.application, props.currentApplicationId]);

  // empty page if props are null
  if ((!props.job && !props.application) || !props.job) return <></>;

  return (
    <a
      className={`lg:pointer-events-none rounded-lg block p-1 ${
        focus &&
        "lg:bg-gradient-to-r lg:from-green-400 lg:via-blue-300 lg:to-blue-700"
      }`}
    >
      <article className="bg-card-bg p-6 shadow-lg bg-white">
        <div className="flex gap-4 mb-6">
          <img
            src={props.job.company?.logo || ""}
            className="object-contain w-16 h-16"
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
            <StatusText
              status={props.application.status}
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

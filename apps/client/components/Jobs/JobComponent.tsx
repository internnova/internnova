import { Job, Company } from "@prisma/client";
import { useState, useEffect } from "react";

type JobComponentProps = {
  job: (Job & { company: Company }) | null;
  currentJobId: number | null;
};

const JobComponent = (props: JobComponentProps) => {
  // empty page if props are null
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (props?.currentJobId === props.job?.id) {
      setFocus(true);
    } else setFocus(false);
  }, [props.job, props.currentJobId]);

  if (!props.job?.company || !props.job) return <></>;

  return (
    <a
      className={`lg:pointer-events-none rounded-lg block p-1 ${
        focus && "bg-gradient-to-r from-green-400 via-blue-300 to-blue-700"
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

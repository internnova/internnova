import { Job, Company } from "@prisma/client";

type JobComponentProps = {
  job: (Job & { company: Company }) | null;
  company: Company | null;
};

// TODO: The JobComponent company name should open /copmany/{company.id}
const JobComponent = (props: JobComponentProps) => {
  if (!props.company || !props.job) return <></>;
  return (
    <a className="lg:pointer-events-none block">
      <article className="bg-card-bg p-6 rounded-md shadow-lg">
        <div className="flex gap-4 mb-6">
          <img
            src={props.company?.logo || ""}
            className="w-16 h-16"
            alt="Job"
          />
          <div>
            <a
              className="mb-1 text-lg font-bold hover:underline"
              href={`/job/${props.job.id}`}
            >
              {props.job.position}
            </a>
            <h3 className="text-md mb-1 font-bold text-blue-500 underline">
              {props.company?.name}
            </h3>
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
            <span className="inline-block p-3 text-sm font-bold text-blue-700 underline rounded">
              {props.job.industry?.replace("_", " ")}
            </span>
          </div>
          <div className="flex">
            <img
              src={`/assets/img/${!props.job.salary && "un"}verified-check.svg`}
              alt="Checkmark"
              className="ml-3 mr-1"
            />
            <p>{!props.job.salary ? "Unpaid Internship" : props.job.salary}</p>
          </div>
        </div>
      </article>
    </a>
  );
};

export default JobComponent;

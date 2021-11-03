import { Job, Company } from "@prisma/client";

type Props = {
  job: (Job & { company: Company }) | null;
  company: Company | null;
};

// TODO: The JobComponent company name should open /jobs/{job.id}
const JobComponent = (props: Props) => {
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
            <h3 className="font-bold text-lg mb-1">{props.job.position}</h3>
            <h3 className="font-bold text-md mb-1 text-blue-500 underline">
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
        <div className="flex items-center justify-between">
          <div>
            {props.job.tags.map((tag, x) => (
              <span
                className="font-bold text-sm p-3 rounded inline-block text-blue-700 underline"
                key={x}
              >
                {tag}
              </span>
            ))}
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

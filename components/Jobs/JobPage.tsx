import { Job, Company } from "@prisma/client";
import SmallButton from "../SmallButton";

type Props = {
  job: Job;
  company: Company;
};

const JobPage = (props: Props) => {
  return (
    <section className="bg-card-bg p-12 flex-1 rounded-md hidden lg:block">
      <article className="flex item-center justify-between mb-9">
        <div>
          <h1 className="font-bold text-xl mb-1">{props.job.position}</h1>
          <p className="text-muted">{props.job.location}</p>
        </div>
        <p className="text-white">Posted {props.job.postedAt}</p>
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
          <p className="text-muted">{props.job.industry}</p>
        </article>
        <article className="space-y-1">
          <h2 className="font-bold">Location</h2>
          <p className="text-muted">{props.job.location}</p>
        </article>
        <article className="space-y-1">
          <h2 className="font-bold">Salary</h2>
          <p className="text-muted">
            {props.job.salary ? props.job.salary : "Unpaid Internship"}
          </p>
        </article>
      </div>
      <article className="space-y-4 mb-6">
        <h3 className="text-blue-700 font-bold">Job Overview</h3>
        <p className="text-muted">{props.job.description}</p>
      </article>
      <article className="space-y-4 mb-6">
        <h3 className="text-blue-700 font-bold">Job Requirements</h3>
        {props.job.skillsRequired.map((skill, x) => {
          <div className="flex gap-3 text-muted" key={x}>
            <img src="/assets/img/verified-checkmark.svg" alt="Checkmark" />
            <p>{skill}</p>
          </div>;
        })}
      </article>
      <article className="space-y-4 mb-6">
        <h3 className="text-blue-700 font-bold">Company Overview</h3>
        <p className="text-muted">{props.company.description}</p>
      </article>
      <SmallButton content="Apply for the job" />
    </section>
  );
};

export default JobPage;

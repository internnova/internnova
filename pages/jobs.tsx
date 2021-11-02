import { Company, Job } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import JobComponent from "../components/Jobs/JobComponent";
import JobPage from "../components/Jobs/JobPage";
import { prisma } from "../lib/prisma";

type JobProps = {
  jobs: Job[];
  companies: Company[];
};

const Jobs = (props: JobProps) => {
  const [job, setJob] = useState<Job | null>(props.jobs[0]);
  const [company, setCompany] = useState<Company | null>(props.companies[0]);
  console.log(props.jobs);

  useEffect(() => {
    if (props.jobs.length > 0) {
      setJob(props.jobs[0]);
      setCompany(
        props.companies.find((companyIter) => {
          return companyIter.id === job?.companyId;
        }) || null
      );
    }
  }, [props.jobs, props.companies, job?.companyId]);

  return (
    <div className="container mx-auto md:px-10 py-10 bg-white">
      <main className="flex items-start justify-center">
        {/* Jobs */}
        <section className="space-y-6 lg:mr-6 xl:mr-16">
          {props.jobs.map((jobIter) => {
            const filteredCompany =
              props.companies.find((companyIter) => {
                return companyIter.id === jobIter.companyId;
              }) || null;
            return (
              <JobComponent
                key={jobIter.id}
                job={jobIter}
                setJob={setJob}
                company={filteredCompany}
              />
            );
          })}
        </section>
        {/* Job Description */}
        <JobPage job={job} company={company} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (/*context*/) => {
  const jobs = await prisma.job.findMany({});
  const companies = await prisma.company.findMany({
    where: { id: { in: jobs.flatMap((job) => job.id) } },
  });
  return {
    props: {
      jobs,
      companies,
    },
  };
};

export default Jobs;

import { Company, Job } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import JobComponent from "../components/Jobs/JobComponent";
import JobPage from "../components/Jobs/JobPage";
import { prisma } from "../lib/prisma";

type JobProps = {
  jobs: (Job & { company: Company })[];
};

const Jobs = (props: JobProps) => {
  const [job, setJob] = useState<(Job & { company: Company }) | null>(
    props.jobs[0]
  );
  const [company, setCompany] = useState<Company | null>(
    job ? job.company : null
  );

  useEffect(() => {
    setCompany(job ? job.company : null);
  }, [job]);

  return (
    <div className="container mx-auto md:px-10 py-10 bg-white">
      <main className="flex items-start justify-center">
        {/* Jobs */}
        <section className="space-y-6 lg:mr-6 xl:mr-16">
          {props.jobs.map((jobIter) => (
            <div onClick={() => setJob(jobIter)} key={jobIter.id}>
              <JobComponent job={jobIter} company={jobIter.company} />
            </div>
          ))}
        </section>
        {/* Job Description */}
        <JobPage job={job} company={company} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (/*context*/) => {
  const jobs = await prisma.job.findMany({
    include: { company: true },
  });
  return {
    props: {
      jobs,
    },
  };
};

export default Jobs;

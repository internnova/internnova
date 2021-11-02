import { Company, Job } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import JobComponent from "../components/Jobs/JobComponent";
import JobPage from "../components/Jobs/JobPage";
import { Loading } from "../components/Loading";
import { prisma } from "../lib/prisma";

type JobProps = {
  jobs: Job[];
};

const getCompany = (companyId: number): Company | null => {
  let data;
  fetch(`/api/db/getCompany?id=${companyId.toString()}`).then((res) => {
    data = res.json();
  });
  if (data) {
    return data["company"];
  }
  return null;
};

const Jobs = (props: JobProps) => {
  const [job, setJob] = useState<Job | null>(null);
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    if (job) {
      const company = getCompany(job.companyId);
      setCompany(company);
    }
  }, [job, props.jobs]);

  return (
    <div className="container mx-auto md:px-10 py-10 bg-white">
      <main className="flex items-start justify-center">
        {/* Jobs */}
        <section className="space-y-6 lg:mr-6 xl:mr-16">
          {props.jobs.map((job) => (
            <JobComponent
              key={job.id}
              job={job}
              setJob={setJob}
              companyName={getCompany(job.companyId)?.name || ""}
            />
          ))}
        </section>
        {/* Job Description */}
        {job && company ? <JobPage job={job} company={company} /> : <Loading />}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (/*context*/) => {
  const jobs = await prisma.job.findMany();
  return {
    props: {
      jobs,
    },
  };
};

export default Jobs;

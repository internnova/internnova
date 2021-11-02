import { GetServerSideProps } from "next";
import { prisma } from "../lib/prisma";
import { Job } from "@prisma/client";
import JobComponent from "../components/Jobs/JobComponent";

type JobProps = {
  jobs: Job[];
};

const getCompanyName = (companyId: number): string | null => {
  let data;
  fetch(`/api/db/companyName?id=${companyId.toString()}`).then((res) => {
    data = res.json();
  });
  if (data) {
    return data["companyName"];
  }
  return null;
};

const Jobs = (props: JobProps) => {
  return (
    <div className="container mx-auto md:px-10 py-10 bg-white">
      <main className="flex items-start justify-center">
        {/* Jobs */}
        <section className="space-y-6 lg:mr-6 xl:mr-16">
          {props.jobs.map((job) => (
            <JobComponent
              key={job.id}
              job={job}
              companyName={getCompanyName(job.companyId) || ""}
            />
          ))}
        </section>
        {/* Job Description */}
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

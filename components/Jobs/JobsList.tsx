import { Company, Job } from "@prisma/client";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import JobComponent from "./JobComponent";
import JobPage from "./JobPage";
import SmallButton from "../SmallButton";
import Link from "next/link";

type JobsListProps = {
  queryApi?: string;
};

const JobsList = ({ queryApi }: JobsListProps) => {
  const [jobs, setJobs] = useState<(Job & { company: Company })[]>([]);
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState<(Job & { company: Company }) | null>(jobs[0]);
  const [company, setCompany] = useState<Company | null>(
    job ? job.company : null
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        queryApi ? `/api/db/fetchJobs?${queryApi}` : "/api/db/fetchJobs"
      );
      const data: (Job & { company: Company })[] = (await result.json()).jobs;
      if (data.length !== 0) {
        setJobs(data);
        setJob(data[0] || []);
        setCompany(job?.company || null);
      }
      setLoading(false);
    };
    fetchData();
  }, [job?.company, queryApi]);

  useEffect(() => {
    setCompany(job ? job.company : null);
  }, [job]);

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-50">
      {jobs.length === 0 && (
        <>
          <div
            className="bg-right-topm flex h-screen bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/assets/img/bg.jpg')" }}
          >
            <div className="container px-5 pb-5 m-auto">
              <div className="space-y-4">
                <h1 className="sm:w-2/3 sm:text-4xl md:max-w-xl md:text-5xl font-fancy pb-2 text-3xl font-black">
                  404 - Jobs not found
                </h1>
                <p className="md:max-w-md md:text-xl text-grey-900 max-w-sm pb-5 text-lg font-semibold text-gray-700">
                  We{"'"}re out of jobs, check back later!
                </p>
              </div>
              <Link href="/" passHref>
                <a>
                  <SmallButton content="Go Home" />
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
      {jobs.length !== 0 && (
        <div className="md:px-10 container py-10 mx-auto bg-white">
          <main className="flex items-start justify-center">
            {/* Jobs */}
            <section className="lg:mr-6 xl:mr-16 space-y-6 lg">
              {jobs.length !== 0 &&
                jobs.map((jobIter) => (
                  <div onClick={() => setJob(jobIter)} key={jobIter.id}>
                    <JobComponent job={jobIter} />
                  </div>
                ))}
            </section>
            {/* Job Description */}
            <JobPage job={job} company={company} />
          </main>
        </div>
      )}{" "}
    </div>
  );
};

export default JobsList;

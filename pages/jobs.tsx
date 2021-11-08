import { Company, Job } from "@prisma/client";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import JobComponent from "../components/Jobs/JobComponent";
import JobPage from "../components/Jobs/JobPage";
import SmallButton from "../components/SmallButton";
import Link from "next/link";

const Jobs = () => {
  const [jobs, setJobs] = useState<(Job & { company: Company })[]>([]);
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState<(Job & { company: Company }) | null>(jobs[0]);
  const [company, setCompany] = useState<Company | null>(
    job ? job.company : null
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/db/fetchJobs");
      const data: (Job & { company: Company })[] = (await result.json()).jobs;
      if (data.length !== 0) {
        setJobs(data);
        setJob(data[0] || []);
        setCompany(job?.company || null);
      }
      setLoading(false);
    };
    fetchData();
  }, [job?.company]);

  useEffect(() => {
    setCompany(job ? job.company : null);
  }, [job]);

  if (loading) return <Loading />;

  return (
    <>
      {jobs.length === 0 && (
        <>
          <div
            className="flex h-screen bg-cover bg-no-repeat bg-right-topm"
            style={{ backgroundImage: "url('/assets/img/bg.jpg')" }}
          >
            <div className="container m-auto px-5 pb-5">
              <div className="space-y-4">
                <h1 className="text-3xl font-black sm:w-2/3 sm:text-4xl md:max-w-xl md:text-5xl pb-2 font-fancy">
                  404 - Jobs not found
                </h1>
                <p className="max-w-sm text-lg text-gray-700 md:max-w-md md:text-xl pb-5 font-semibold text-grey-900">
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
        <div className="container mx-auto md:px-10 py-10 bg-white">
          <main className="flex items-start justify-center">
            {/* Jobs */}
            <section className="space-y-6 lg:mr-6 xl:mr-16">
              {jobs.length !== 0 &&
                jobs.map((jobIter) => (
                  <div onClick={() => setJob(jobIter)} key={jobIter.id}>
                    <JobComponent job={jobIter} company={jobIter.company} />
                  </div>
                ))}
            </section>
            {/* Job Description */}
            <JobPage job={job} company={company} />
          </main>
        </div>
      )}{" "}
    </>
  );
};

export default Jobs;

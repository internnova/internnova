import { Company, Job } from "@prisma/client";
import { useEffect, useState } from "react";
import Loading from "components/Loading";
import JobComponent from "components/Jobs/JobComponent";
import JobPage from "components/Jobs/JobPage";
import { UserOnSteriods } from "lib/helpers/fetchUser";

type JobsListProps = {
  userDb?: UserOnSteriods | null;
};

const JobsList = (props: JobsListProps) => {
  const [jobs, setJobs] = useState<(Job & { company: Company })[]>([]);
  const [appliedForCurrentJob, setAppliedForCurrentJob] = useState<
    boolean | null
  >(null);

  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState<(Job & { company: Company }) | null>(jobs[0]);
  const [company, setCompany] = useState<Company | null>(
    job ? job.company : null
  );

  useEffect(() => {
    (async () => {
      // fetch jobs
      const resultJobs = await fetch("/api/db/fetchJobs");

      //parse repsonse
      const data: (Job & { company: Company })[] = (await resultJobs.json())
        .jobs;
      if (data.length !== 0) {
        // if jobs are found, do the following
        setJobs(data);
        if (data.length > 0) setJob(data[0]);
        setCompany(job?.company || null);
      }

      // if the user is an intern

      // stop spinner
      setLoading(false);
    })();
    /*eslint-disable-next-line */
  }, []);

  useEffect(() => {
    setCompany(job ? job.company : null);
    if (props.userDb?.jobApplications) {
      // check if application exist
      if (job) {
        const appliedForCurrentJob = props.userDb.jobApplications.find(
          (application) => application.jobId === job.id
        );
        if (appliedForCurrentJob?.description) {
          setAppliedForCurrentJob(true);
        } else {
          setAppliedForCurrentJob(false);
        }
      }
    }
  }, [job, props.userDb, appliedForCurrentJob]);

  if (loading) return <Loading />;

  return (
    <div className="bg-white">
      {jobs.length === 0 && (
        <>
          <div className="container px-5 pb-5 m-auto text-center pt-10">
            <div className="space-y-4">
              <h1 className="sm:text-4xl  md:text-5xl heading pb-2 text-3xl font-black text-center">
                404 - Jobs not found
              </h1>
              <p className="md:text-xl text-grey-900 pb-5 text-lg font-semibold text-gray-700 text-center">
                We{"'"}re out of jobs, check back later!
              </p>
            </div>
          </div>
        </>
      )}
      {jobs.length !== 0 && (
        <div className="px-5 container py-10 mx-auto bg-white">
          <main className="flex items-start justify-center">
            {/* Jobs */}
            <section className="lg:mr-6 xl:mr-16 space-y-6">
              {jobs.length !== 0 &&
                jobs.map((jobIter) => (
                  <div onClick={() => setJob(jobIter)} key={jobIter.id}>
                    <JobComponent job={jobIter} />
                  </div>
                ))}
            </section>
            {/* Job Description */}
            <JobPage
              job={job}
              company={company}
              appliedForCurrentJob={appliedForCurrentJob}
            />
          </main>
        </div>
      )}{" "}
    </div>
  );
};

export default JobsList;

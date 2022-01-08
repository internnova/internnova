import { Company, Job, JobApplication } from "@prisma/client";
import { useEffect, useState } from "react";
import Loading from "components/Loading";
import JobComponent from "components/Jobs/JobComponent";
import JobPage from "components/Jobs/JobPage";
import { UserOnSteriods } from "lib/helpers/fetchUser";
import JobsNotFound from "components/Jobs/JobsNotFound";
import fetchJobs from "lib/helpers/fetchJobs";

type JobsListProps = {
  userDb?: UserOnSteriods | null;
  search: string | null;
};

const JobsList = (props: JobsListProps) => {
  const [jobs, setJobs] = useState<(Job & { company: Company })[]>([]);
  // job in focus
  const [job, setJob] = useState<(Job & { company: Company }) | null>(jobs[0]);

  const [appliedForCurrentJob, setAppliedForCurrentJob] = useState<
    boolean | null
  >(null);

  const [company, setCompany] = useState<Company | null>(
    job ? job.company : null
  );

  const [triggeredAtLeastOnce, setTriggeredAtLeastOnce] =
    useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch jobs
    (async () => {
      // fetch jobs
      let jobsRes: null | (Job & { company: Company })[];

      if (!triggeredAtLeastOnce) {
        jobsRes = await fetchJobs();
        setTriggeredAtLeastOnce(true);
      } else {
        jobsRes = await fetchJobs(props.search);
        console.log("got herer");
      }

      setJobs(jobsRes);
      if (jobsRes && jobsRes.length > 0) setJob(jobsRes[0]);

      // stop spinner
      setLoading(false);
      console.log("jobs", jobsRes);
    })();
    /*eslint-disable-next-line */
  }, [props.search]);

  useEffect(() => {
    // match applications and assign company
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
      {jobs.length === 0 && <JobsNotFound />}
      {jobs.length !== 0 && (
        <div className="px-5 container py-10 mx-auto bg-white">
          <main className="flex items-start justify-center">
            {/* Jobs */}
            <section className="lg:mr-6 xl:mr-16 space-y-6">
              {jobs !== null &&
                jobs.length !== 0 &&
                jobs.map((jobIter) => (
                  <div onClick={() => setJob(jobIter)} key={jobIter.id}>
                    <JobComponent job={jobIter} currentJobId={job.id} />
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

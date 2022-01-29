import { Company, Job } from "@prisma/client";
import { useContext, useEffect, useState } from "react";
import Loading from "components/Loading";
import JobComponent from "components/Jobs/JobComponent";
import JobPage from "components/Jobs/JobPage";
import JobsNotFound from "components/Jobs/JobsNotFound";
import fetchJobs from "lib/helpers/fetchJobs";
import InternHomepageContext from "contexts/InternHomepage";
import searchJobs from "lib/helpers/searchJobs";

type JobsListProps = {
  search: string | null;
};

const JobsList = (props: JobsListProps) => {
  const [jobs, setJobs] = useState<(Job & { company: Company })[]>([]);
  // job in focus
  const [job, setJob] = useState<(Job & { company: Company }) | null>(jobs[0]);
  const context = useContext(InternHomepageContext);

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

      setLoading(true);
      if (!triggeredAtLeastOnce) {
        if (!context.jobs) {
          jobsRes = await fetchJobs();
        } else {
          // exlcude all closed jobs
          jobsRes = context.jobs.filter((job) => !job.closed);
        }
        setTriggeredAtLeastOnce(true);
      } else {
        if (props.search !== "" || !context.jobs) {
          jobsRes = await fetchJobs(props.search);
        } else {
          jobsRes = context.jobs.filter((job) => !job.closed);
          setJobs(searchJobs(context.jobs, props.search));
        }
      }

      const finalJobs = jobsRes;

      setJobs(finalJobs);
      if (finalJobs && finalJobs.length > 0) setJob(finalJobs[0]);

      // stop spinner
      setLoading(false);
    })();
    /*eslint-disable-next-line */
  }, [props.search, context.jobs]);

  useEffect(() => {
    // match applications and assign company
    setCompany(job ? job.company : null);
    if (context.userDb?.jobApplications) {
      // check if application exist
      if (job) {
        const appliedForCurrentJob = context.userDb.jobApplications.find(
          (application) => application.jobId === job.id
        );
        if (appliedForCurrentJob?.description) {
          setAppliedForCurrentJob(true);
        } else {
          setAppliedForCurrentJob(false);
        }
      }
    }
  }, [job, context.userDb, appliedForCurrentJob]);

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
              // what is the job iter position
              description={context.descriptions[jobs.indexOf(job)]}
              job={job}
              company={company}
              appliedForCurrentJob={appliedForCurrentJob}
            />
          </main>
        </div>
      )}
    </div>
  );
};

export default JobsList;

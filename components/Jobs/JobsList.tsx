import { Company, Job, JobApplication } from "@prisma/client";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import JobComponent from "./JobComponent";
import JobPage from "./JobPage";
import { UserOnSteriods } from "../../lib/helpers/fetchUser";

type JobsListProps = {
  userDb?: UserOnSteriods | null;
};

const JobsList = (props: JobsListProps) => {
  const [jobs, setJobs] = useState<(Job & { company: Company })[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
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
        setJob(data[0] || []);
        setCompany(job?.company || null);
      }

      // if the user is an intern

      // stop spinner
      setLoading(false);
    })();
    /*eslint-disable-next-line */
  }, []);

  useEffect(() => {
    (async () => {
      if (props.userDb && props.userDb.role === "INTERN") {
        const resultApplications: { applications: JobApplication[] | null } =
          await (
            await fetch(`/api/db/fetchApplications/${props.userDb.internId}`)
          ).json();
        console.log(resultApplications);
        // if applications are found, set state variable to them
        try {
          setApplications(resultApplications.applications as JobApplication[]);
        } catch {
          console.log("application error");
        }
      }
    })();
    /*eslint-disable-next-line */
  }, []);

  useEffect(() => {
    setCompany(job ? job.company : null);
    if (applications) {
      // check if application exist
      if (job) {
        const appliedForCurrentJob = applications.find(
          (application) => application.jobId === job.id
        );
        console.log("got here", appliedForCurrentJob, applications);
        if (appliedForCurrentJob?.description) {
          setAppliedForCurrentJob(true);
        } else {
          setAppliedForCurrentJob(false);
        }
      }
    }
  }, [job, applications, appliedForCurrentJob]);

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

import { Company, Job, JobApplication } from "@prisma/client";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import JobComponent from "./JobComponent";
import JobPage from "./JobPage";
import SmallButton from "../SmallButton";
import Link from "next/link";
import { UserOnSteriods } from "../../lib/helpers/fetchUser";

type JobsListProps = {
  userDb?: UserOnSteriods | null;
};

const JobsList = (props: JobsListProps) => {
  const [jobs, setJobs] = useState<(Job & { company: Company })[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [appliedForCurrentJob, setAppliedForCurrentJob] =
    useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState<(Job & { company: Company }) | null>(jobs[0]);
  const [company, setCompany] = useState<Company | null>(
    job ? job.company : null
  );

  // asking eslint to kindly shut up
  console.log(appliedForCurrentJob);

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
      if (props.userDb && props.userDb.internId) {
        const resultApplications: JobApplication[] = await // fetch applications
        (
          await fetch(`/api/db/fetchApplications/${props.userDb.internId}`)
        ).json();
        if (resultApplications.length > 0) {
          // if applications are found, set state variable to them
          setApplications(resultApplications);
        }
      }

      // stop spinner
      setLoading(false);
    })();
  }, [job?.company, props.userDb]);

  useEffect(() => {
    setCompany(job ? job.company : null);
    if (applications) {
      // check if application exist
      const appliedForCurrentJob = applications.find(
        (application) => application.jobId === job?.id
      );
      setAppliedForCurrentJob(appliedForCurrentJob ? true : false);
    }
  }, [job, applications, setAppliedForCurrentJob]);

  if (loading) return <Loading />;

  return (
    <div className="bg-white">
      {jobs.length === 0 && (
        <>
          <div
            className="bg-right-topm flex h-screen bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/assets/img/bg.jpg')" }}
          >
            <div className="container px-5 pb-5 m-auto">
              <div className="space-y-4">
                <h1 className="sm:w-2/3 sm:text-4xl md:max-w-xl md:text-5xl heading pb-2 text-3xl font-black">
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

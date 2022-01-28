import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import fetchApplications from "lib/helpers/fetchApplications";
import { JobApplication, Job, Company } from "@prisma/client";
import Loading from "components/Loading";
import JobApplicationView from "components/Applications/JobApplicationComponent";
import Navbar from "components/Navbar";
import JobApplicationPage from "components/Applications/JobApplicationPage";
import JobApplicationsNotFound from "components/Applications/JobApplicationsNotFound";

const OnboardingPage = () => {
  const router = useRouter();
  const user = useUser();
  const email = user.primaryEmailAddress?.emailAddress;
  const [application, setApplication] = useState<
    (JobApplication & { job: Job & { company: Company } }) | null
  >(null);
  const [applications, setApplications] =
    useState<(JobApplication & { job: Job & { company: Company } })[]>(null);

  useEffect(() => {
    if (user && email !== undefined) {
      // if the user(auth user) exists check for user in db
      (async () => {
        const applications = await fetchApplications(email || "");
        // the fetchApplications variable has 3 possible values,
        // 1. an array of applications
        // 2. null - representing there are no applications
        // 3. undefined - representing the user is not in the db
        if (applications === undefined) {
          // if user doesn't exist in db redirect to onboarding
          router.push("/onboarding");
        } else if (applications === null) {
          // if user exists but there are no applications
          setApplications([]);
        } else {
          // if user exists and there are applications
          setApplications(applications);
          setApplication(applications[0]);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (applications === null) return <Loading />;
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <div className="mx-auto py-10 md:max-w-md">
          <h1 className="text-4xl pb-2 m-auto text-center">
            Your Applications
          </h1>
        </div>
        {applications.length === 0 && <JobApplicationsNotFound />}
        {applications.length !== 0 && (
          <div className="px-5 container py-10 mx-auto bg-white">
            <main className="flex items-start justify-center">
              {/* Jobs */}
              <section className="lg:mr-6 xl:mr-16 space-y-6">
                {applications !== null &&
                  applications.length !== 0 &&
                  applications.map((applicationIter) => (
                    <div
                      onClick={() => setApplication(applicationIter)}
                      key={applicationIter.id}
                    >
                      <JobApplicationView
                        application={applicationIter}
                        currentApplicationId={application?.id}
                        job={applicationIter.job}
                        key={applicationIter.id}
                      />
                    </div>
                  ))}
              </section>
              {/* Job Description */}
              {application ? (
                <JobApplicationPage
                  application={application}
                  job={{ ...application.job, company: application.job.company }}
                />
              ) : (
                <></>
              )}
            </main>
          </div>
        )}
      </div>
    </>
  );
};

export default OnboardingPage;

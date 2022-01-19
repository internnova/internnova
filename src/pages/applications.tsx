import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import fetchApplications from "lib/helpers/fetchApplications";
import { JobApplication, Job } from "@prisma/client";
import Loading from "components/Loading";
import JobApplicationView from "components/Jobs/JobApplicationView";

const OnboardingPage = () => {
  const router = useRouter();
  const user = useUser();
  const email = user.primaryEmailAddress?.emailAddress;
  const [applications, setApplications] =
    useState<(JobApplication & { job: Job })[]>(null);

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
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (applications === null) return <Loading />;
  return (
    <>
      {applications.map((application) => (
        <JobApplicationView
          jobApplication={application}
          job={application.job}
          key={application.id}
        />
      ))}
    </>
  );
};

export default OnboardingPage;

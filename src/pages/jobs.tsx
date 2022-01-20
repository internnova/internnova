import InternHomepage from "components/HomePage/Intern";
import { useRouter } from "next/router";
import { Company, Job } from "@prisma/client";
import { prisma } from "lib/prisma";
import InternHomepageContext from "contexts/InternHomepage";
import { useEffect, useState } from "react";
import fetchUser, { UserOnSteriods } from "lib/helpers/fetchUser";
import { useUser } from "@clerk/nextjs";

type JobPageProps = {
  jobs: (Job & { company: Company })[] | null;
};

const Index = (props: JobPageProps) => {
  const [userDb, setUserDb] = useState<UserOnSteriods | null>(null);
  const user = useUser();
  const router = useRouter();

  const success = router.query.success ? true : false;
  const successId = router.query.successId;
  const applicationId = router.query.applicationId;

  useEffect(() => {
    if (user && user.primaryEmailAddress !== undefined) {
      // if the user(auth  user) exists, check for the user in db
      (async () => {
        const userDbRes = await fetchUser(
          user.primaryEmailAddress?.emailAddress || ""
        );
        if (userDbRes === null) {
          router.push("/onboarding");
        }
        setUserDb(userDbRes);
      })();
    }
    /*eslint-disable-next-line */
  }, []);

  return (
    <InternHomepageContext.Provider
      value={{
        success: success as boolean,
        successId: successId as string,
        applicationId: applicationId as string,
        jobs: props.jobs,
        userDb: userDb,
      }}
    >
      <InternHomepage />
    </InternHomepageContext.Provider>
  );
};

export const getStaticProps = async () => {
  const jobs = await prisma.job.findMany({
    include: { company: true },
    where: { closed: false },
  });

  return {
    props: {
      jobs,
    },
    revalidate: 15, // In seconds
  };
};

export default Index;

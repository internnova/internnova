import InternHomepage from "components/HomePage/Intern";
import { useRouter } from "next/router";
import { Company, Job } from "@prisma/client";
import { prisma } from "lib/prisma";
import InternHomepageContext from "contexts/InternHomepage";
import { useEffect, useState } from "react";
import fetchUser, { UserOnSteriods } from "lib/helpers/fetchUser";
import { useUser } from "@clerk/nextjs";
import { serialize } from "next-mdx-remote/serialize";
import Loading from "components/Loading";

type JobPageProps = {
  jobs: (Job & { company: Company })[] | null;
  descriptions: {
    compiledSource: string;
    renderedOutput: string;
    //eslint-disable-next-line
    scope?: { [key: string | number | symbol]: any };
  }[];
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

  if (userDb) {
    return (
      <InternHomepageContext.Provider
        value={{
          success: success as boolean,
          successId: successId as string,
          applicationId: applicationId as string,
          ...props,
          userDb: userDb,
        }}
      >
        <InternHomepage />
      </InternHomepageContext.Provider>
    );
  } else {
    return <Loading />;
  }
};

export const getStaticProps = async () => {
  const jobs = await prisma.job.findMany({
    include: { company: true },
    where: { closed: false },
    orderBy: { postedAt: "desc" },
  });

  const descriptions = await Promise.all(
    jobs.map(async (job) => {
      return await serialize(job.description);
    })
  );

  return {
    props: {
      jobs,
      descriptions,
    },
    revalidate: 15, // In seconds
  };
};

export default Index;

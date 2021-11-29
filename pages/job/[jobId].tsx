import { Company, Job } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import React, { useEffect } from "react";
import JobPage from "../../components/Jobs/JobPage";
import { prisma } from "../../lib/prisma";
import fetchUser from "../../lib/helpers/fetchUser";
import { useUser, SignedIn } from "@clerk/nextjs";

const RequireOnboarding = () => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    // if the user(auth  user) exists, check for the user in db
    (async () => {
      const userDbRes = await fetchUser(
        user.primaryEmailAddress?.emailAddress || ""
      );
      if (!userDbRes || !userDbRes.email) {
        // if the user is not in db send them to the onboarding page(which will make a new user in db)
        router.push("/onboarding");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

type JobProps = {
  job: Job & { company: Company };
};

const JobsPage = (props: JobProps) => {
  const router = useRouter();

  useEffect(() => {
    if (props.job) {
      window.document.title = `${props.job.position} - InternNova`;
    } else {
      router.push("/404");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Meta
        title={`${props.job.position} - InternNova`}
        description={props.job.description}
        keywords={[
          "Education",
          "Internships",
          "High-school",
          "School",
          "Job",
          "Teenager jobs",
          "India",
          props.job.jobType,
        ]}
      />
      <SignedIn>
        <RequireOnboarding />
      </SignedIn>
      <div>
        <JobPage
          responsive
          job={props.job}
          company={props.job?.company || null}
        />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.jobId;
  if (!id || parseInt(id as string) === NaN) {
    // if the id doesn't exist(or isn't a number) redirect to 404
    return { redirect: { destination: "/404", permanent: false } };
  }

  const job = await prisma.job.findFirst({
    where: { id: parseInt(id as string) },
    // include company will allow us to access job.company
    include: { company: true },
  });
  if (job) {
    // if the job is found, return it as props
    return {
      props: {
        job,
      },
    };
  } else {
    // if the job isn't found, redirect to 404
    return { redirect: { destination: "/404", permanent: false } };
  }
};

export default JobsPage;

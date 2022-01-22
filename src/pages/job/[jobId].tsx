import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { Company, Job } from "@prisma/client";
import JobPage from "components/Jobs/JobPage";
import { NextSeo } from "next-seo";
import fetchUser from "lib/helpers/fetchUser";
import { prisma } from "lib/prisma";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type JobProps = {
  job: (Job & { company: Company }) | null;
};

const SignedInView = (props: JobProps) => {
  const router = useRouter();
  const user = useUser();
  const [appliedForCurrentJob, setAppliedForCurrentJob] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    // if the user(auth  user) exists, check for the user in db
    (async () => {
      const userDbRes = await fetchUser(
        user.primaryEmailAddress?.emailAddress || ""
      );
      if (!props.job || props.job.closed) {
        router.push("/404");
      } else if (!userDbRes) {
        // if the user is not in db send them to the onboarding page(which will make a new user in db)
        router.push("/onboarding");
      } else {
        if (userDbRes.jobApplications) {
          userDbRes.jobApplications.filter(
            (jobApplication) => jobApplication.jobId === props.job.id
          ).length > 0
            ? setAppliedForCurrentJob(true)
            : setAppliedForCurrentJob(false);
        }
      }
    })();
    /*eslint-disable-next-line*/
  }, [props.job]);

  return (
    <>
      <JobPage
        job={props.job}
        company={props.job?.company || null}
        responsive
        appliedForCurrentJob={appliedForCurrentJob}
      />
    </>
  );
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

  if (props.job === undefined) {
    router.push("/404");
    return <></>;
  }

  return (
    <>
      <NextSeo
        title={`${props.job.position} - InternNova`}
        description={props.job.description}
        openGraph={{
          url: "https://www.internnova.co",
          title: `${props.job.position} - InternNova`,
          description: props.job.description,
          images: [
            {
              url: props.job.company.logo || "/assets/img/twitter.png",
              alt: "InternNova",
            },
          ],
          site_name: "InternNova",
        }}
        twitter={{
          handle: "@InternNovaLabs",
          site: "https://www.internnova.co",
          cardType: "summary",
        }}
      />

      <SignedIn>
        <SignedInView job={props.job} />
      </SignedIn>
      <SignedOut>
        <JobPage
          responsive
          job={props.job}
          company={props.job.company}
          appliedForCurrentJob={undefined}
        />
      </SignedOut>
    </>
  );
};

export const getStaticPaths = async () => {
  const jobs = await prisma.job.findMany({
    where: {
      closed: false,
    },
  });

  let paths: { params: { jobId: string } }[] = [];

  if (jobs) {
    paths = jobs.map((job) => {
      return {
        params: {
          jobId: String(job.id),
        },
      };
    });
  }

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({
  params,
}: {
  params: { jobId: string };
}) {
  const id = params.jobId;

  if (!id || parseInt(id as string) === NaN) {
    // if the id doesn't exist(or isn't a number) redirect to 404
    return { redirect: { destination: "/404", permanent: false } };
  }

  const job = await prisma.job.findFirst({
    where: { id: parseInt(id as string) },
    // include company will allow us to access job.company
    include: { company: true },
  });

  if (job && !job.closed) {
    // if the job is found, return it as props
    return {
      props: {
        job,
      },
      revalidate: 30,
    };
  } else {
    // if the job isn't found, redirect to 404
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
}

export default JobsPage;

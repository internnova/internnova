import { Company, Job } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import JobPage from "../../components/Jobs/JobPage";
import { prisma } from "../../lib/prisma";

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
  }, [props.job, router]);

  return (
    <JobPage responsive job={props.job} company={props.job?.company || null} />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.jobId;
  if (!id) {
    return { redirect: { destination: "/404", permanent: false } };
  }
  const job = await prisma.job.findFirst({
    where: { id: parseInt(id as string) },
    include: { company: true },
  });
  if (job) {
    return {
      props: {
        job,
      },
    };
  } else {
    return { redirect: { destination: "/404", permanent: false } };
  }
};

export default JobsPage;

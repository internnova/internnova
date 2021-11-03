import { Company, Job } from "@prisma/client";
import { GetServerSideProps } from "next";
import JobPage from "../components/Jobs/JobPage";
import { prisma } from "../lib/prisma";
import { useEffect } from "react";
import { useRouter } from "next/router";

type JobProps = {
  job?: (Job & { company: Company }) | null;
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
    <JobPage
      job={props.job ? props.job : null}
      company={props?.job?.company || null}
    />
  );
};

/*eslint-disable*/
// @ts-ignore
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;
  if (!id) {
    return {
      props: {
        job: null,
      },
    };
  }
  const job = await prisma.job.findFirst({
    where: { id: parseInt(id as string) },
    include: { company: true },
  });
  console.log(job);
  if (job) {
    return {
      props: {
        job,
      },
    };
  }
  return {
    props: {
      job: null,
    },
  };
};

export default JobsPage;

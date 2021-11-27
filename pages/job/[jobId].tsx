import { Company, Job } from "@prisma/client";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
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
              url: "/seo-image.png",
              width: 800,
              height: 420,
              alt: "InternNova",
            },
          ],
          site_name: "InternNova",
        }}
        twitter={{
          handle: "@InternNovaLabs",
          site: "https://www.internnova.co",
          cardType: "summary_large_image",
        }}
      />
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

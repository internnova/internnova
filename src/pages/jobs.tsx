import InternHomepage from "components/HomePage/Intern";
import { useRouter } from "next/router";
import { Company, Job } from "@prisma/client";
import { prisma } from "lib/prisma";

type JobPageProps = {
  jobs: (Job & { company: Company })[] | null;
};

const Index = (props: JobPageProps) => {
  const router = useRouter();

  const success = router.query.success ? true : false;
  const successId = router.query.successId;
  console.log(successId);
  return (
    <InternHomepage
      success={success}
      successId={successId as string}
      jobs={props.jobs}
    />
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

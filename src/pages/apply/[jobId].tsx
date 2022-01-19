import { Company, Job, User, JobApplication } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CreateApplication from "components/Forms/CreateApplication";
import { prisma } from "lib/prisma";
import fetchUser from "lib/helpers/fetchUser";
import { useUser } from "@clerk/nextjs";

type JobProps = {
  job: (Job & { company: Company }) | null;
  emails: string[];
  userDb: User;
};

const JobsPage = (props: JobProps) => {
  const router = useRouter();
  const user = useUser();
  const email = user.primaryEmailAddress?.emailAddress;

  const routerEmail = router.query.email as string;
  useEffect(() => {
    if (user && email !== undefined) {
      // if the user(auth user) exists check for user in db
      (async () => {
        const userDbRes = await fetchUser(email || "");
        if (!props.job) {
          router.push("/404");
        } else if (!userDbRes) {
          // if the user is not in db send them to the onboarding page(which will make a new user in db)
          router.push("/onboarding");
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // redirect to job page if already applied
  useEffect(() => {
    if (props.emails.includes(email || "")) {
      router.push(`/job/${props.job?.id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.emails]);

  useEffect(() => {
    if (props.job) {
      window.document.title = `Apply: ${props.job.position} - InternNova`;
    } else {
      router.push("/404");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CreateApplication email={email || ""} job={props.job} />;
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

  const applications = await prisma.jobApplication.findMany({
    where: { job: { id: parseInt(id as string) } },
    include: { intern: true },
  });

  // only give intern email
  const emails = applications.map((application) => {
    return application.intern.email;
  });

  if (job && !job?.closed) {
    // if the job is found, return it as props
    return {
      props: {
        job,
        emails,
      },
      revalidate: 30,
    };
  } else {
    // if the job isn't found, redirect to 404
    return { props: { job: null } };
  }
}

export default JobsPage;

import { Company, Job, User } from "@prisma/client";
import { useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import JobPage from "../../components/Jobs/JobPage";
import { prisma } from "../../lib/prisma";
import { Auth } from "@supabase/ui";
import getUser from "../../lib/helpers/getUser";

type JobProps = {
  job: Job & { company: Company };
  userDb: User;
};

const JobsPage = (props: JobProps) => {
  const router = useRouter();
  const [userDb, setUserDb] = useState<User | null | undefined>(null);
  const { user } = Auth.useUser();

  useEffect(() => {
    if (user && user.email) {
      setUserDb(getUser(user.email) || null);
    }
    if (!user) {
      router.push("/login");
    } else if (userDb) {
      router.push("/");
    }
  }, [user, router, userDb]);

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
  const id = context.query.id;
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

import { Company, Job, User } from "@prisma/client";
import { useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CreateApplication from "../../components/Forms/CreateApplication";
import { prisma } from "../../lib/prisma";
import { Auth } from "@supabase/ui";
import fetchUser from "../../lib/helpers/fetchUser";
import { SupabaseUser } from "../../lib/SupabaseUser";

type JobProps = {
  job: Job & { company: Company };
  userDb: User;
};

const JobsPage = (props: JobProps) => {
  const router = useRouter();
  const [userDb, setUserDb] = useState<User | null | undefined>(null);
  const { user } = Auth.useUser();

  useEffect(() => {
    if (user && user.email !== "" && user.email !== undefined) {
      // if the user(auth user) exists check for user in db
      (async () => {
        const userDbRes = await fetchUser(user.email || "");
        setUserDb(userDbRes);
        if (!userDbRes || !userDbRes.email) {
          // if the user is not in db send them to the onboarding page(which will make a new user in db)
          router.push("/onboarding");
        }
      })();
    }
  }, [user, router, userDb]);

  useEffect(() => {
    if (props.job) {
      window.document.title = `Apply: ${props.job.position} - InternNova`;
    } else {
      router.push("/404");
    }
  }, [props.job, router]);

  return <CreateApplication user={user as SupabaseUser} job={props.job} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // see pages/job/[jobId].tsx for explanation of this function
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

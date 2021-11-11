// import { Role } from "@prisma/client";
import { GetServerSideProps } from "next";
// import { useState } from "react";
// import AccountOptions from "../components/Forms/AccountOptions";
// import CreateCompany from "../components/Forms/CreateCompany";
import CreateIntern from "../components/Forms/CreateIntern";
import { prisma } from "../lib/prisma";
import { supabase } from "../lib/initSupabase";
import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";
import { User } from "@prisma/client";
import { useEffect } from "react";

type LandingProps = { userDb: User | null };

const OnboardingPage = (props: LandingProps) => {
  const router = useRouter();
  // const [doneWithStage1, setDoneWithStage1] = useState<boolean>(false);
  // const [accountType, setAccountType] = useState<Role>("STANDARD");
  // console.log(user);
  //
  // if (doneWithStage1 && user) {
  //   if (accountType === "EMPLOYER") {
  //     return <CreateCompany user={user} />;
  //   } else if (accountType === "INTERN") {
  const { user } = Auth.useUser();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (props.userDb) {
      router.push("/");
    }
  });
  if (user) return <CreateIntern user={user} />;
  else {
    return <></>;
  }
  //   }
  // }
  //
  // return (
  //   <AccountOptions
  //     accountType={accountType}
  //     setAccountType={setAccountType}
  //     setDone={setDoneWithStage1}
  //   />
  // );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user } = await supabase.auth.api.getUserByCookie(ctx.req);

  if (!user) return { props: {} };

  const userDb = await prisma.user.findUnique({
    where: { email: user?.email },
  });

  if (user && userDb && userDb.email === user.email) {
    return {
      props: {},
      redirect: { destination: "/", permanent: false },
    };
  }
  return { props: { userDb } };
};

export default OnboardingPage;

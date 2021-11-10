// import { Role } from "@prisma/client";
import { GetServerSideProps } from "next";
// import { useState } from "react";
// import AccountOptions from "../components/Forms/AccountOptions";
// import CreateCompany from "../components/Forms/CreateCompany";
import CreateIntern from "../components/Forms/CreateIntern";
import { prisma } from "../lib/prisma";
import { supabase } from "../lib/initSupabase";
import { SupabaseUser } from "../lib/SupabaseUser";

const OnboardingPage = ({ user }: { user: SupabaseUser | null }) => {
  // const [doneWithStage1, setDoneWithStage1] = useState<boolean>(false);
  // const [accountType, setAccountType] = useState<Role>("STANDARD");
  // console.log(user);
  //
  // if (doneWithStage1 && user) {
  //   if (accountType === "EMPLOYER") {
  //     return <CreateCompany user={user} />;
  //   } else if (accountType === "INTERN") {
  if (user) return <CreateIntern user={user} />;
  else return <></>;
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
  const userDb = await prisma.user.findUnique({
    where: { email: user?.email },
  });

  if (!user) {
    // If no user, redirect to login.
    return { props: {}, redirect: { destination: "/login", permanent: false } };
  }

  if (userDb && userDb.email === user.email) {
    return {
      props: {},
      redirect: { destination: "/dashboard", permanent: false },
    };
  }
  return { props: {} };
};

export default OnboardingPage;

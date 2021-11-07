import onboardingRequired from "../lib/onboardingRequired";
import { Role } from "@prisma/client";
import { useState } from "react";
import AccountOptions from "../components/Forms/AccountOptions";
import CreateCompany from "../components/Forms/CreateCompany";
import CreateIntern from "../components/Forms/CreateIntern";
import { SupabaseUser } from "../lib/SupabaseUser";
import { supabase } from "../lib/initSupabase";
import { GetServerSideProps } from "next";

const OnboardingPage = ({ user }: { user: SupabaseUser | null }) => {
  const [doneWithStage1, setDoneWithStage1] = useState<boolean>(false);
  const [accountType, setAccountType] = useState<Role>("STANDARD");
  console.log(user);

  if (doneWithStage1 && user) {
    if (accountType === "EMPLOYER") {
      return <CreateCompany user={user} />;
    } else if (accountType === "INTERN") {
      return <CreateIntern user={user} />;
    }
  }

  return (
    <AccountOptions
      accountType={accountType}
      setAccountType={setAccountType}
      setDone={setDoneWithStage1}
    />
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user } = await supabase.auth.api.getUserByCookie(ctx.req);

  if (!user) {
    // If no user, redirect to login.
    return { props: {}, redirect: { destination: "/login", permanent: false } };
  }

  const onboardingRes = onboardingRequired(
    (user ? user.email : null) as string | null
  );

  if ((await onboardingRes).redirect?.destination === "/onboarding") {
    return { props: { user } };
  } else return onboardingRes;
};

export default OnboardingPage;

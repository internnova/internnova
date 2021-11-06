import onboardingRequired from "../lib/onboardingRequired";
import { Role } from "@prisma/client";
import {
  withPageAuthRequired,
  getSession,
  UserProfile,
} from "@auth0/nextjs-auth0";
import { useState } from "react";
import AccountOptions from "../components/Forms/AccountOptions";
import CreateCompany from "../components/Forms/CreateCompany";
import CreateIntern from "../components/Forms/CreateIntern";

const OnboardingPage = ({ user }: { user: UserProfile }) => {
  const [doneWithStage1, setDoneWithStage1] = useState<boolean>(false);
  const [accountType, setAccountType] = useState<Role>("STANDARD");

  if (doneWithStage1) {
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

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const user = getSession(ctx.req, ctx.res)?.user;
    const onboardingRes = onboardingRequired(user?.email);
    if ((await onboardingRes).redirect?.destination === "/onboarding") {
      return { props: {} };
    }
    return onboardingRes;
  },
});

export default OnboardingPage;

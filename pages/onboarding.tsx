import onboardingRequired from "../lib/onboardingRequired";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

const OnboardingPage = () => {
  return (
    <div>
      <h1>Onboarding</h1>
      <p>This is the onboarding page.</p>
    </div>
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

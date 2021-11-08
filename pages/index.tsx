import { GetServerSideProps } from "next";
import { Landing } from "../components/HomePage/Unauthorized";
import { Auth } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";
import onboardingRequired from "../lib/onboardingRequired";

const Index = () => {
  const { user } = Auth.useUser();
  return <Landing user={user ? user : null} />;
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user } = await supabase.auth.api.getUserByCookie(ctx.req);

  const onboardingRes = onboardingRequired(
    (user ? user.email : null) as string | null
  );

  if ((await onboardingRes).redirect?.destination === "/onboarding") {
    return onboardingRes;
  } else {
    return { props: { user } };
  }
};

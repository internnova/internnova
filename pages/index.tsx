import { Auth } from "@supabase/ui";
import { GetServerSideProps } from "next";
import { Landing } from "../components/HomePage/Unauthorized";
import { supabase } from "../lib/initSupabase";
import InternHomepage from "../components/HomePage/Intern";
import { prisma } from "../lib/prisma";
import { SupabaseUser } from "../lib/SupabaseUser";
import { User } from "@prisma/client";

const Index = ({
  user,
  userDb,
}: {
  user: SupabaseUser | null;
  userDb: User | null;
}) => {
  const { user: userAuth } = Auth.useUser();
  if (!user) {
    return <Landing user={userAuth ? userAuth : null} />;
  } else {
    return <InternHomepage userDb={userDb} user={user} />;
  }
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user } = await supabase.auth.api.getUserByCookie(ctx.req);
  const userDb = await prisma.user.findUnique({
    where: { email: user?.email },
  });

  if (!user) {
    return { redirect: { destination: "/login", permanent: false } };
  } else if (userDb?.email !== user.email) {
    return { redirect: { destination: "/onboarding", permanent: false } };
  } else {
    return { props: { user, userDb } };
  }
};

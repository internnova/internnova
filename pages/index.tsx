import { Auth } from "@supabase/ui";
import { Landing } from "../components/HomePage/Unauthorized";
import InternHomepage from "../components/HomePage/Intern";
import { User } from "@prisma/client";
import getUser from "../lib/helpers/getUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const { user } = Auth.useUser();
  const [userDb, setUserDb] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (user && user.email) {
      getUser(user.email, setUserDb);
      if (!userDb) {
        router.push("/onboarding");
      }
    }
  }, [user, router, userDb]);
  if (!user) {
    return <Landing userDb={userDb} user={user} />;
  } else {
    return <InternHomepage />;
  }
};

export default Index;

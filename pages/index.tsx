import { User } from "@prisma/client";
import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InternHomepage from "../components/HomePage/Intern";
import { Landing } from "../components/HomePage/Unauthorized";
import getUser from "../lib/helpers/getUser";

const Index = () => {
  const { user } = Auth.useUser();
  const [userDb, setUserDb] = useState<User | null | undefined>(null);
  const router = useRouter();

  useEffect(() => {
    if (user && user.email && !userDb) {
      setUserDb(getUser(user.email) || null);
    }
  }, [user, router, userDb]);
  if (!user && userDb !== undefined) {
    return <Landing userDb={userDb} user={user} />;
  } else {
    if (user) {
      return <InternHomepage user={user} />;
    }
  }
  return <></>;
};

export default Index;

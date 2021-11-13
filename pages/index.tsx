import { User } from "@prisma/client";
import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InternHomepage from "../components/HomePage/Intern";
import { Landing } from "../components/HomePage/Unauthorized";
import getUser from "../lib/helpers/getUser";

const Index = () => {
  const { user } = Auth.useUser();
  const [userDb, setUserDb] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (user && user.email) {
      getUser(user.email, setUserDb);
    }
  }, [user, router, userDb]);
  if (!user) {
    return <Landing userDb={userDb} user={user} />;
  } else {
    return <InternHomepage user={user} />;
  }
};

export default Index;

import { Auth } from "@supabase/ui";
import { Landing } from "../components/HomePage/Unauthorized";
import InternHomepage from "../components/HomePage/Intern";
import { User } from "@prisma/client";
import getUser from "../lib/helpers/getUser";
import { useEffect, useState } from "react";

const Index = () => {
  const { user: userAuth } = Auth.useUser();
  const [userDb, setUserDb] = useState<User | null>(null);

  useEffect(() => {
    if (userAuth && userAuth.email) getUser(userAuth.email, setUserDb);
  }, [userAuth]);
  if (!userAuth) {
    return <Landing userDb={userDb} user={userAuth} />;
  } else {
    return <InternHomepage userDb={userDb} user={userAuth} />;
  }
};

export default Index;

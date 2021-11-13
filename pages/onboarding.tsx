import { User } from "@prisma/client";
import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CreateIntern from "../components/Forms/CreateIntern";
import getUser from "../lib/helpers/getUser";

const OnboardingPage = () => {
  const router = useRouter();
  const [userDb, setUserDb] = useState<User | null>(null);
  const { user } = Auth.useUser();
  useEffect(() => {
    if (user && user.email) {
      getUser(user.email, setUserDb);
      if (userDb) {
        router.push("/");
      }
    }
    if (!user) {
      router.push("/login");
    }
  }, [user, router, userDb]);
  if (user) return <CreateIntern user={user} />;
  else {
    return <></>;
  }
};

export default OnboardingPage;

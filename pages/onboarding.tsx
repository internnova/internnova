import { User } from "@prisma/client";
import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CreateIntern from "../components/Forms/CreateIntern";
import fetchUser from "../lib/helpers/fetchUser";

const OnboardingPage = () => {
  const router = useRouter();
  const [userDb, setUserDb] = useState<User | null | undefined>(undefined);
  const { user } = Auth.useUser();
  useEffect(() => {
    if (user && user.email !== "" && user.email !== undefined) {
      // if the user(auth user) exists check for user in db
      (async () => {
        const userDbRes = await fetchUser(user.email || "");
        setUserDb(userDbRes);
        if (userDbRes && userDbRes.email) {
          // if user exists in db redirect to dashboard
          router.push("/");
        }
      })();
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

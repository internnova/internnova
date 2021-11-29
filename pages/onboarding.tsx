import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CreateIntern from "../components/Forms/CreateIntern";
import { useUser } from "@clerk/nextjs";
import fetchUser from "../lib/helpers/fetchUser";

const OnboardingPage = () => {
  const router = useRouter();
  const [userDb, setUserDb] = useState<User | null | undefined>(undefined);
  const user = useUser();
  const email = user.primaryEmailAddress?.emailAddress;

  useEffect(() => {
    if (user && email !== undefined) {
      // if the user(auth user) exists check for user in db
      (async () => {
        const userDbRes = await fetchUser(email || "");
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
  }, []);

  return (
    <div className="pb-10">
      <CreateIntern email={email || ""} />
    </div>
  );
};

export default OnboardingPage;

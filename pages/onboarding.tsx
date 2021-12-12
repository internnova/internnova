import { useRouter } from "next/router";
import { useEffect } from "react";
import CreateIntern from "components/Forms/CreateIntern";
import { useUser } from "@clerk/nextjs";
import fetchUser from "lib/helpers/fetchUser";
import Navbar from "components/Navbar";

const OnboardingPage = () => {
  const router = useRouter();
  const user = useUser();
  const email = user.primaryEmailAddress?.emailAddress;

  useEffect(() => {
    if (user && email !== undefined) {
      // if the user(auth user) exists check for user in db
      (async () => {
        const userDbRes = await fetchUser(email || "");
        if (userDbRes) {
          // if user exists in db redirect to dashboard
          router.push("/");
        }
      })();
    }
    if (!user) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pb-10">
      <Navbar noOptions />
      <CreateIntern email={email || ""} />
    </div>
  );
};

export default OnboardingPage;

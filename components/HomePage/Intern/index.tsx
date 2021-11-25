import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetchUser, { UserOnSteriods } from "../../../lib/helpers/fetchUser";
import JobsList from "../../Jobs/JobsList";
import Navbar from "./Navbar";
import { useUser } from "@clerk/nextjs";

const InternHomepage = () => {
  const [userDb, setUserDb] = useState<UserOnSteriods | null>(null);
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user && user.primaryEmailAddress !== undefined) {
      // if the user(auth  user) exists, check for the user in db
      (async () => {
        const userDbRes = await fetchUser(
          user.primaryEmailAddress?.emailAddress || ""
        );
        setUserDb(userDbRes);
        if (!userDbRes || !userDbRes.email) {
          // if the user is not in db send them to the onboarding page(which will make a new user in db)
          router.push("/onboarding");
        }
      })();
    }
  }, [user, router, userDb]);

  return (
    <div>
      <Navbar />
      <div className="h-screen bg-gray-50">
        <div className="mx-auto py-10">
          <h1 className="text-4xl pb-2  m-auto text-center">Search For Jobs</h1>
        </div>
        <div>
          <JobsList userDb={userDb} />
        </div>
      </div>
    </div>
  );
};

export default InternHomepage;

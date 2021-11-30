import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetchUser, { UserOnSteriods } from "../../../lib/helpers/fetchUser";
import JobsList from "../../Jobs/JobsList";
import Navbar from "../../Navbar";
import { useUser } from "@clerk/nextjs";

const InternHomepage = () => {
  const [userDb, setUserDb] = useState<UserOnSteriods | null>(null);
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log("email", user.primaryEmailAddress?.emailAddress);
    if (user && user.primaryEmailAddress !== undefined) {
      // if the user(auth  user) exists, check for the user in db
      (async () => {
        console.log("hi");
        const userDbRes = await fetchUser(
          user.primaryEmailAddress?.emailAddress || ""
        );
        if (userDbRes === null || !userDbRes.email) {
          router.push("/onboarding");
        }
        setUserDb(userDbRes);
      })();
    }
    /*eslint-disable-next-line */
  }, [user]);

  return (
    <div>
      <Navbar />
      <p>{JSON.stringify(userDb)}</p>
      <p>{JSON.stringify(user.primaryEmailAddress?.emailAddress)}</p>
      <div className="h-screen">
        <div className="mx-auto py-10">
          <h1 className="text-4xl pb-2 m-auto text-center heading">
            Search For Jobs
          </h1>
        </div>
        <div>
          <JobsList userDb={userDb} />
        </div>
      </div>
    </div>
  );
};

export default InternHomepage;

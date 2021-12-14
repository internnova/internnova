import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetchUser, { UserOnSteriods } from "lib/helpers/fetchUser";
import JobsList from "components/Jobs/JobsList";
import Navbar from "components/Navbar";
import { useUser } from "@clerk/nextjs";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast("Successfully applied to the job, you will get updates on your email", {
    icon: "👏",
    style: {
      borderRadius: "10px",
      background: "#9db5f3",
      color: "#000",
    },
    duration: 4000,
  });

type InternHomepageProps = {
  success?: boolean;
};
const InternHomepage = (props: InternHomepageProps) => {
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
        if (userDbRes === null) {
          router.push("/onboarding");
        } else if (props.success) {
          notify();
        }
        setUserDb(userDbRes);
      })();
    }
    /*eslint-disable-next-line */
  }, []);

  return (
    <div>
      <Navbar />
      <div className="h-screen">
        <div className="mx-auto py-10">
          <h1 className="text-4xl pb-2 m-auto text-center heading">
            Search For Jobs
          </h1>
        </div>
        <div>
          <Toaster />
          <JobsList userDb={userDb} />
        </div>
      </div>
    </div>
  );
};

export default InternHomepage;

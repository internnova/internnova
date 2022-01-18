import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetchUser, { UserOnSteriods } from "lib/helpers/fetchUser";
import JobsList from "components/Jobs/JobsList";
import Navbar from "components/Navbar";
import { useUser } from "@clerk/nextjs";
import toast, { Toaster } from "react-hot-toast";
import { Company, Job } from "@prisma/client";

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
  jobs: (Job & { company: Company })[] | null;
};

const InternHomepage = (props: InternHomepageProps) => {
  const [userDb, setUserDb] = useState<UserOnSteriods | null>(null);
  const [search, setSearch] = useState<string>("");
  const [tempSearch, setTempSearch] = useState<string>("");
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

  useEffect(() => {
    if (tempSearch === "") setSearch("");
  }, [tempSearch]);

  return (
    <div>
      <Navbar />
      <div className="h-screen">
        <div className="mx-auto py-10 md:max-w-md">
          <h1 className="text-4xl pb-2 m-auto text-center heading">
            Search For Jobs
          </h1>
          <div className="mt-10 mx-10 md:mx-0 flex items-center bg-white rounded-lg overflow-hidden px-2 py-2 justify-between border-2 border-gray-300">
            <input
              className="text-base text-gray-800 flex-grow outline-none px-2"
              type="text"
              placeholder="What are you looking for?"
              onChange={(e) => setTempSearch(e.target.value)}
              value={tempSearch}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  setSearch(tempSearch);
                }
              }}
            />
            <button className="text-2xl" onClick={() => setSearch(tempSearch)}>
              🔍
            </button>
          </div>
        </div>
        <div>
          <Toaster />
          <JobsList userDb={userDb} search={search} jobs={props.jobs} />
        </div>
      </div>
    </div>
  );
};

export default InternHomepage;

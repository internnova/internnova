import JobsList from "components/Jobs/JobsList";
import Navbar from "components/Navbar";
import InternHomepageContext from "contexts/InternHomepage";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast("Successfully applied to the job, you will get updates on your email", {
    icon: "👏",
    style: {
      borderRadius: "10px",
    },
    duration: 4000,
  });

const InternHomepage = () => {
  const context = useContext(InternHomepageContext);
  const [search, setSearch] = useState<string>("");
  const [tempSearch, setTempSearch] = useState<string>("");

  useEffect(() => {
    if (context.success) {
      const successCheck = context.userDb.jobApplications.find(
        (application) => {
          return String(application.jobId) === context.successId;
        }
      );
      if (successCheck && !successCheck.shownNotification) {
        notify();
        (async () => {
          await fetch(
            `/api/db/createNotificationApplication/${context.applicationId}`
          );
        })();
      } else {
        history.pushState({}, null, "/jobs");
      }
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
          <h1 className="text-4xl pb-2 m-auto text-center">Search For Jobs</h1>
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
          <JobsList search={search} />
        </div>
      </div>
    </div>
  );
};

export default InternHomepage;

import Navbar from "./Navbar";
// import Search from "./Search";
// import { useState } from "react";
import JobsList from "../../Jobs/JobsList";
import { SupabaseUser } from "../../../lib/SupabaseUser";
import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

type InternHomepageProps = { user: SupabaseUser | null; userDb: User | null };

const InternHomepage = (props: InternHomepageProps) => {
  //const [searchResult, setSearchResult] = useState<string>("");
  //const [clickedSearch, setClickedSearch] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (!props.userDb) {
      router.push("/onboarding");
    }
  });

  return (
    <div>
      <Navbar />
      <div className="h-screen bg-gray-50">
        <div className="mx-auto py-10">
          <h1 className="text-4xl pb-2 font-fancy m-auto text-center">
            Search For Jobs
          </h1>
          {/* <Search */}
          {/*   result={searchResult} */}
          {/*   setResult={setSearchResult} */}
          {/*   setClickedSearch={setClickedSearch} */}
          {/* /> */}
        </div>
        <div>
          <JobsList />
        </div>
      </div>
    </div>
  );
};

export default InternHomepage;

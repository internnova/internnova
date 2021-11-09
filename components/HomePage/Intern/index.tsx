import Navbar from "./Navbar";
// import Search from "./Search";
// import { useState } from "react";
import JobsList from "../../Jobs/JobsList";

const InternHomepage = () => {
  //   const [searchResult, setSearchResult] = useState<string>("");
  //   const [clickedSearch, setClickedSearch] = useState<boolean>(false);

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

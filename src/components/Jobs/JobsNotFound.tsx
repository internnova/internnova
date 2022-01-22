const JobsNotFound = () => {
  return (
    <div className="container px-5 pb-5 m-auto text-center pt-10">
      <div className="space-y-4">
        <h1 className="sm:text-4xl  md:text-5xl pb-2 text-3xl font-black text-center">
          404 - Jobs not found
        </h1>
        <p className="md:text-xl text-grey-900 pb-5 text-lg font-semibold text-gray-700 text-center">
          We{"'"}re either out of jobs, or can{"'"}t find any jobs that meet
          your search criteria
        </p>
      </div>
    </div>
  );
};

export default JobsNotFound;

const JobApplicationsNotFound = () => {
  return (
    <div className="container px-5 pb-5 m-auto text-center pt-10">
      <div className="space-y-4">
        <h1 className="sm:text-4xl  md:text-5xl pb-2 text-3xl font-black text-center">
          404 - Applications not found
        </h1>
        <p className="md:text-xl text-grey-900 pb-5 text-lg font-semibold text-gray-700 text-center">
          You have not applied to any jobs yet. Apply to a job and then check
          back here!
        </p>
      </div>
    </div>
  );
};

export default JobApplicationsNotFound;

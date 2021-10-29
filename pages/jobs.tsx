import { useEffect, useState } from "react";
import JobComponent from "../components/Jobs/JobComponent";
import { Job } from "../types";

// in a list.
const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      fetch(`${process.env.BASE_URL}/internships`)
        .then((response) => response.json())
        .then((data: Job[]) => {
          setJobs(data);
          setLoading(false);
        });
    } catch (err) {
      console.log("Error fetching jobs", err);
    }
  }, []);

  return (
    <div>
      <h1>Jobs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <JobComponent job={job} key={job.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Jobs;

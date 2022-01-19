import { Job, Company } from "@prisma/client";

// wrapper for fetching jobs from db
const fetchJobs = async (search?: string) => {
  try {
    const url = search
      ? `api/db/fetchJobs/search?search=${search}`
      : `api/db/fetchJobs`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jobs: (Job & { company: Company })[] = (await res.json()).jobs;

    return jobs;
  } catch {
    return null;
  }
};

export default fetchJobs;

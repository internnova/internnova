import { Company, Job } from "@prisma/client";

const searchJobs = (arr: (Job & { company: Company })[], searchKey: string) => {
  if (searchKey === "") {
    return arr;
  }
  return arr.filter((job) => {
    if (
      (job.position.includes(searchKey) ||
        job.location.includes(searchKey) ||
        job.skillsRequired.join(" ").includes(searchKey) ||
        job.description.includes(searchKey) ||
        job.company.description.includes(searchKey) ||
        job.companyName.includes(searchKey)) &&
      !job.closed
    ) {
      return job;
    }
  });
};

export default searchJobs;

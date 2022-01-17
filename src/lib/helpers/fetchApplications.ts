import { User, JobApplication, Job } from "@prisma/client";

export interface UserOnSteriods extends User {
  internId?: number;
  companyId?: number;
  jobApplications?: JobApplication[];
}

// wrapper for fetching applications from db
const fetchUser = async (email: string) => {
  try {
    const res = await fetch(`/api/db/fetchUser`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const userDb: UserOnSteriods | null = await res.json();

    if (userDb?.internId) {
      const resTheSecond = await fetch(
        `/api/db/fetchApplications/${userDb.internId}`,
        {
          method: "POST",
          body: JSON.stringify({ internId: userDb?.internId }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const applications: (JobApplication & { job: Job })[] = (
        await resTheSecond.json()
      ).applications;

      return applications;
    } else {
      return undefined;
    }
  } catch {
    return null;
  }
};

export default fetchUser;

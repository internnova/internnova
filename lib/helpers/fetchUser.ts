import { User, JobApplication } from "@prisma/client";

export interface UserOnSteriods extends User {
  internId?: number;
  companyId?: number;
  jobApplications?: JobApplication[];
}

// wrapper for fetching user from db
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

    return userDb;
  } catch {
    return null;
  }
};

export default fetchUser;

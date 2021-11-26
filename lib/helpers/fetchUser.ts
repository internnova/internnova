import { User } from "@prisma/client";

export interface UserOnSteriods extends User {
  internId?: number;
  companyId?: number;
}

// wrapper for fetching user from db
const fetchUser = async (email: string) => {
  const res = await fetch(`/api/db/fetchUser`, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const userDb: UserOnSteriods | null = await res.json();

  return userDb;
};

export default fetchUser;

import { User } from "@prisma/client";

// wrapper for fetching user from db
const fetchUser = async (email: string) => {
  const res = await fetch(`/api/db/fetchUser`, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const userDb: User | null = await res.json();

  return userDb;
};

export default fetchUser;

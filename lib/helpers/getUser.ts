import { User } from "@prisma/client";

const getUser = async (email: string) => {
  const res = await fetch(`/api/db/getUser`, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const userDb: User | null = await res.json();

  return userDb;
};

export default getUser;

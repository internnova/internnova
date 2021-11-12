import { User } from "@prisma/client";

export default async (
  email: string,
  setUserDb: (value: User | null) => void
) => {
  const userDb = await fetch(`/api/getUser`, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const userDbData: User | null = await userDb.json();
  setUserDb(userDbData);
  return;
};

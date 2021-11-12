import { User } from "@prisma/client";

const getUser = async (
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
  if (userDbData && userDbData.email === email) {
    setUserDb(userDbData);
  }
  return;
};

export default getUser;

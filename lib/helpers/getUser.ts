import { User } from "@prisma/client";

const getUser = async (email: string) => {
  const res = await fetch(`/api/getUser`, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const userDb: User | null = await res.json();

  console.log("email", email);
  console.log("uuu", userDb);
  return userDb;
};

export default getUser;

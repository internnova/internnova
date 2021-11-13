import { User } from "@prisma/client";

const getUser = (email: string) => {
  let userDb: User | null = null;
  fetch(`/api/getUser`, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      userDb = res;
    });
  return userDb;
};

export default getUser;

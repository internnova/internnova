import type { NextApiRequest, NextApiResponse } from "next";

type CreatedUserAndCompany = {
  email: string;
  name: string;
  role: "EMPLOYER";
  logo: string;
  website: string;
  CIN: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  } else {
    const body: CreatedUserAndCompany = req.body;
    res.status(200).send({ message: "OK", body });
  }
};

export default handler;

import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

type CreatedUserAndCompany = {
  email: string;
  name: string;
  role: "EMPLOYER";
  logo: string;
  description: string;
  website: string;
  CIN: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  } else {
    const body: CreatedUserAndCompany = req.body;
    const { email, role, name } = body;
    const user = await prisma.user.create({ data: { email, role, name } });
    const company = await prisma.company.create({
      data: {
        userId: user.id,
        name: name,
        description: body.description,
        logo: body.logo,
        website: body.website,
        CIN: body.CIN,
      },
    });

    res
      .status(200)
      .send({ message: "successfully created user and company", company });
  }
};

export default handler;

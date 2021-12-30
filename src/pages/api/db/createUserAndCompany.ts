import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma";

type CreateUserAndCompany = {
  email: string;
  name: string;
  role: "EMPLOYER";
  logo: string;
  description: string;
  website: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  } else {
    const body: CreateUserAndCompany = req.body;
    const { email, role, name } = body;
    try {
      const user = await prisma.user.create({ data: { email, role, name } });
      const company = await prisma.company.create({
        data: {
          userId: user.id,
          name: name,
          description: body.description,
          email,
          logo: body.logo,
          website: body.website,
        },
      });

      res.status(200).send({
        message: "successfully created user and company",
        company,
        email,
      });
    } catch (e) {
      // the only reason the error would be thrown is if the job or company exist
      res
        .status(400)
        .send({ error: "either the user or company already exists" });
    }
  }
};

export default handler;

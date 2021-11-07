import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { Tag } from "@prisma/client";

interface CreateUserAndIntern {
  email: string;
  name: string;
  role: "INTERN";
  bio: string;
  interests: Tag[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  } else {
    const body: CreateUserAndIntern = req.body;
    const user = await prisma.user.create({
      data: {
        ...body,
      },
    });
    const intern = await prisma.intern.create({
      data: { ...body, userId: user.id },
    });

    res
      .status(200)
      .send({ message: "successfully created user and intern", intern });
  }
};

export default handler;

import { Tag } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma";

type CreateUserAndIntern = {
  email: string;
  name: string;
  role: "INTERN";
  bio: string;
  interests: Tag[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  } else {
    try {
      const { name, email, role, bio, interests }: CreateUserAndIntern =
        req.body;

      const user = await prisma.user.create({
        data: {
          name,
          email,
          role,
        },
      });

      const intern = await prisma.intern.createMany({
        data: [
          {
            bio,
            interests: interests,
            userId: user.id,
            email,
          },
        ],
      });

      res
        .status(200)
        .send({ message: "successfully created user and intern", intern });
    } catch (e) {
      // the only reason the error would be thrown is if the job or company exist
      res.status(400).send({ error: e as string });
    }
  }
};

export default handler;

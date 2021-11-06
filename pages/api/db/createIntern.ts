import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { Prisma, Tag } from "@prisma/client";

type InternCreate = {
  userId: number;
  bio: string;
  interests: Tag[];
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  } else {
    try {
      const body: InternCreate = JSON.parse(req.body);
      const intern = await prisma.intern.create({
        data: {
          ...body,
        },
      });
      res
        .status(200)
        .json({ message: "Successfully created intern", data: { intern } });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === "P2002") {
          res.status(400).json({
            message:
              "There is a unique constraint violation, a new intern cannot be created with this data",
            fields: e.meta,
          });
        }
      }
      throw e;
    }
  }
};

import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { Prisma, Role } from "@prisma/client";

type UserCreate = {
  email: string;
  role: Role;
  name: string;
  picture: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  } else {
    try {
      const body: UserCreate = JSON.parse(req.body);
      const user = await prisma.user.create({
        data: {
          ...body,
        },
      });
      res
        .status(200)
        .json({ message: "Successfully created user", data: { user } });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === "P2002") {
          res.status(400).json({
            message:
              "There is a unique constraint violation, a new user cannot be created with this data",
            fields: e.meta,
          });
        }
      }
      throw e;
    }
  }
};

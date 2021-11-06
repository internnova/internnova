import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { Prisma } from "@prisma/client";

type CompanyCreate = {
  userId: number;
  name: string;
  description: string;
  logo: string;
  website: string;
  CIN: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  } else {
    try {
      const body: CompanyCreate = JSON.parse(req.body);
      const company = await prisma.company.create({
        data: {
          ...body,
        },
      });
      res
        .status(200)
        .json({ message: "Successfully created company", data: { company } });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === "P2002") {
          res.status(400).json({
            message:
              "There is a unique constraint violation, a new company cannot be created with this data",
            fields: e.meta,
          });
        }
      }
      throw e;
    }
  }
};

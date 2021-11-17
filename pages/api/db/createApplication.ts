import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { SupabaseUser } from "../../../lib/SupabaseUser";
import { Job } from "@prisma/client";

type CreateApplication = {
  description: string;
  user: SupabaseUser;
  job: Job;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  } else {
    const body: CreateApplication = req.body;
    const { description, user, job } = body;
    const userDb = await prisma.user.findFirst({
      where: { email: user.email },
    });

    if (!userDb && user.email) {
      res.status(400).send({ message: "User not found" });
      return;
    } else {
      if (userDb) {
        const intern = await prisma.intern.findFirst({
          where: { userId: userDb.id },
        });
        if (intern) {
          const application = prisma.jobApplication.create({
            data: {
              internId: intern.id,
              status: "APPLIED",
              jobId: job.id,
              description,
            },
          });

          res
            .status(200)
            .send({ message: "successfully created application", application });
          return;
        }
      }
    }
    res.status(400).send({ message: "user not onboarded or not found" });
    return;
  }
};

export default handler;

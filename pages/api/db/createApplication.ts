import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { Job } from "@prisma/client";

type CreateApplication = {
  description: string;
  email: string;
  job: Job;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  } else {
    const { description, email, job }: CreateApplication = req.body;

    // check if user exist
    const userDb = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!userDb || !email || userDb?.role !== "INTERN") {
      // return a 404 if user doesn't exist or user is not an intern
      res.status(404).send({ message: "User not found" });
      return;
    } else {
      if (userDb) {
        // find the intern object in the database
        const intern = await prisma.intern.findFirst({
          where: { userId: userDb.id },
        });
        if (intern) {
          // if the intern exists go to next step

          // check if the application exists
          const applicationCheck = await prisma.jobApplication.findFirst({
            where: { internId: intern.id, jobId: job.id },
          });

          // if application doesn't exist, create it
          if (!applicationCheck) {
            const application = prisma.jobApplication.create({
              data: {
                internId: intern.id,
                status: "APPLIED",
                jobId: job.id,
                description,
              },
            });

            res.status(200).send({
              message: "successfully created application",
              application,
            });
            return;
          } else {
            // if application exists, return error
            res.status(400).send({ message: "Application already exists" });
            return;
          }
        }
      }
    }
    res.status(400).send({ message: "user not onboarded or not found" });
    return;
  }
};

export default handler;

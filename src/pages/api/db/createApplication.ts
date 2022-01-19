import type { NextApiRequest, NextApiResponse } from "next";
import { Status } from "@prisma/client";
import { prisma } from "lib/prisma";

type CreateApplication = {
  description: string;
  email: string;
  jobId: string | number;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  } else {
    const { description, email }: CreateApplication = req.body;
    let { jobId }: { jobId: string | number } = req.body;
    if (typeof jobId === "string" && parseInt(jobId) === NaN) {
      res.status(400).json({ error: "invalid jobId" });
      return;
    } else {
      if (typeof jobId === "string") {
        jobId = parseInt(jobId);
      } else {
        jobId = jobId;
      }
    }

    const intern = await prisma.intern.findFirst({
      where: { email },
    });

    if (!intern || intern.email !== email) {
      // return a 404 if user doesn't exist
      res.status(404).json({ message: "user not onboarded or not found" });
      return;
    } else if (intern) {
      // if the intern exists go to next step

      // check if the application exists
      const applicationCheck = await prisma.jobApplication.findFirst({
        where: { internId: intern.id, jobId: jobId },
      });

      // if application doesn't exist, create it
      if (!applicationCheck && jobId) {
        const application = await prisma.jobApplication.create({
          data: {
            internId: intern.id,
            status: Status.APPLIED,
            jobId: jobId,
            description,
          },
        });

        res.status(200).json({
          message: "successfully created application",
          application: application,
          id: application.id,
        });
        return;
      } else {
        // if application exists, return error
        res.status(400).json({
          message: "Application already exists or jobId not provided",
        });
        return;
      }
    }
    res.status(404).json({ message: "user not onboarded or not found" });
    return;
  }
};

export default handler;

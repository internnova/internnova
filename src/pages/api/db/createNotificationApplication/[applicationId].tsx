import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { applicationId } = req.query;
  if (!applicationId || parseInt(applicationId as string) === NaN) {
    // if there is no interest or the interest is not a valid tag return an error
    res.status(400).json({
      error: "Invalid or missing applicationId",
    });
    return;
  } else {
    const jobApplication = await prisma.jobApplication.findFirst({
      where: { id: parseInt(applicationId as string) },
      include: {
        job: true,
      },
    });

    if (!jobApplication) {
      res.status(400).json({
        error: "Invalid applicationId",
      });
      return;
    } else {
      // update job application
      const updatedJobApplication = await prisma.jobApplication.update({
        where: { id: jobApplication.id },
        data: {
          shownNotification: true,
        },
      });
      res.status(200).json({
        jobApplication: updatedJobApplication,
      });
    }
    res.status(200).json({});
    return;
  }
};

export default handler;

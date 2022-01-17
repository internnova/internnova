import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma";

type FetchApplicationBody = {
  internId: string;
  jobId: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // GET requests will fetch all applications
    const applications = await prisma.jobApplication.findMany();
    res.status(200).json({ applications: applications });
    // return to terminate the request
    return;
  } else if (req.method === "POST") {
    // POST requests will fetch an application based on the internId and jobId
    const { internId, jobId }: FetchApplicationBody = req.body;
    if (!internId || !jobId) {
      res.status(400).json({ error: "missing parameters in request body" });
      return;
    }
    const application = await prisma.jobApplication.findFirst({
      where: {
        internId: parseInt(internId as string),
        jobId: parseInt(jobId as string),
      },
      include: {
        job: true,
      },
    });
    // return 404 if no application is found
    if (!application) {
      res.status(404).json({ error: "application not found" });
      return;
    }

    // return application if found
    res.status(200).json({ application: application });
  } else {
    // edge case
    res.status(400).json({ error: "invalid request method" });
    return;
  }
};

export default handler;

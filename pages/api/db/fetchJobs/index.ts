import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const jobs = await prisma.job.findMany({
    include: { company: true },
  });

  res.status(200).json({ jobs: jobs || [] });
};

export default handler;

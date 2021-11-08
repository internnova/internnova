import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const jobs = await prisma.job.findMany({
    include: { company: true },
  });

  res.status(200).json({ jobs: jobs || null });
};

export default handler;

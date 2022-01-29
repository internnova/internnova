import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // fetch all jobs
  const jobs = await prisma.job.findMany({
    include: { company: true },
    where: { closed: false },
    orderBy: { id: "desc" },
  });

  res.status(200).json({
    jobs: jobs,
  });
  return;
};

export default handler;

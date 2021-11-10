import { Tag } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let { interest } = req.query;
  interest = interest as string;

  if (
    interest &&
    interest !== "" &&
    (Object.values(Tag) as string[]).includes(interest as string) &&
    (interest as Tag)
  ) {
    const jobs = await prisma.job.findMany({
      where: { industry: interest as Tag },
      include: { company: true },
    });
    res.status(200).json({ jobs: jobs, error: "Invalid or missing interest" });
    return;
  } else {
    const jobs = await prisma.job.findMany({
      include: { company: true },
    });

    res.status(200).json({ jobs: jobs || [] });
    return;
  }
};

export default handler;

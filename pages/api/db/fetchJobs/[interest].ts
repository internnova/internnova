import { Tag } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const filterJobsByInterest = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { interest } = req.query;
  if (
    !interest ||
    !(Object.values(Tag) as string[]).includes(interest as string) ||
    !(interest as Tag)
  ) {
    // if there is no interest or the interest is not a valid tag return an error
    res.status(400).json({ error: "Invalid or missing interest" });
    return;
  } else {
    const jobs = await prisma.job.findMany({
      where: { industry: interest as Tag },
      include: { company: true },
    });

    res.status(200).json({ jobs: jobs || [] });
    return;
  }
};

export default filterJobsByInterest;

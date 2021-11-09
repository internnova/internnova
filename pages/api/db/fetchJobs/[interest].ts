import { Tag } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const filterJobsByInterest = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { interest } = req.query;
  /*eslint-disable*/
  if (
    !interest ||
    !(<any>Object).values(Tag).includes(interest) ||
    !(interest as Tag)
  ) {
    res.status(200).json({ error: "Invalid or missing interest" });
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

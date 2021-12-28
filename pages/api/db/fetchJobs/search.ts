import { Tag } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma";

const filterJobsByInterest = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { search } = req.query;
  const tags = Object.values(Tag).map((tag) => {
    return tag.toLowerCase();
  });

  const searchFiltered = (search as string).toLowerCase();

  if (tags.includes(searchFiltered)) {
    console.log("searchFiltered in tags");
    const jobs = await prisma.job.findMany({
      where: {
        OR: [
          {
            description: {
              contains: search as string,
            },
          },
          {
            industry: {
              equals: ((search as string).charAt(0).toUpperCase() +
                (search as string).slice(1)) as Tag,
            },
          },
          {
            position: {
              contains: search as string,
            },
          },
          {
            companyName: {
              contains: search as string,
            },
          },
        ],
      },
    });
    res.status(200).json(jobs);
    return;
  }

  const jobs = await prisma.job.findMany({
    where: {
      OR: [
        {
          description: {
            contains: search as string,
          },
        },
        {
          position: {
            contains: search as string,
          },
        },
        {
          companyName: {
            contains: search as string,
          },
        },
      ],
    },
  });
  res.status(200).json(jobs);
};

export default filterJobsByInterest;

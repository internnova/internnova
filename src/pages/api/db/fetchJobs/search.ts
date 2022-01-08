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
        closed: false,
        OR: [
          {
            description: {
              search: search as string,
              mode: "insensitive", // Default value: default
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
              mode: "insensitive", // Default value: default
            },
          },
          {
            companyName: {
              contains: search as string,
              mode: "insensitive", // Default value: default
            },
          },
        ],
      },
      include: { company: true },
      orderBy: {
        _relevance: {
          fields: ["description"],
          search: search as string,
          sort: "asc",
        },
      },
    });
    res.status(200).json(jobs);
    return;
  }

  const jobs = await prisma.job.findMany({
    where: {
      closed: false,
      OR: [
        {
          description: {
            search: search as string,
            mode: "insensitive", // Default value: default
          },
        },
        {
          position: {
            contains: search as string,
            mode: "insensitive", // Default value: default
          },
        },
        {
          companyName: {
            contains: search as string,
            mode: "insensitive", // Default value: default
          },
        },
      ],
    },
    include: { company: true },
    orderBy: {
      _relevance: {
        fields: ["description"],
        search: search as string,
        sort: "asc",
      },
    },
  });
  res.status(200).json({ jobs });
};

export default filterJobsByInterest;

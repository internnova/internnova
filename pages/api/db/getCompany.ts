import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = parseInt(req.query.id as string);
  const company = await prisma.company.findFirst({ where: { id } });
  res.status(200).json({ company: company });
};

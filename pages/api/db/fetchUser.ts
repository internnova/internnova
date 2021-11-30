import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  } else {
    // get user by email
    const email: string = req.body.email;

    const user = await prisma.user.findFirst({ where: { email } });

    if (user && user.role === "INTERN") {
      const intern = await prisma.intern.findFirst({
        where: { userId: user.id },
      });
      res.status(200).send({ ...user, internId: intern?.id });
    } else if (user && user.role === "EMPLOYER") {
      const company = await prisma.company.findFirst({
        where: { userId: user.id },
      });
      res.status(200).send({ ...user, companyId: company?.id });
    }
  }
};

export default handler;

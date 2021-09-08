import prisma from "db"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await prisma.internship.findMany()
  res.status(200).json(data)
}
export default handler

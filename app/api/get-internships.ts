import prisma from "db"

export default async function handler(req, res) {
  const data = await prisma.internship.findMany()
  res.status(200).json(data)
}

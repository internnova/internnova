import prisma from "db"
import { internshipType } from "types"

import type { NextApiRequest, NextApiResponse } from "next"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const data = req.body as internshipType
  if (
    !(data.position && data.contract && data.location && data.logo && data.company && data.tools)
  ) {
    console.log(data)
    res.status(400).json({
      code: "bad-data",
      message:
        "The data was either missing a position key, contract key, data location key, company key, or tools key",
    })
  }
  await prisma.internship.create({
    data: data,
  })
  res.status(200).send("Valid Data!!!!")
}

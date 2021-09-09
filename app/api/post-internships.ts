import prisma from "db"
import { internshipType } from "types"

import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body as internshipType
  if (
    !(
      data.position &&
      data.contract &&
      data.location &&
      data.logo &&
      data.company &&
      data.tools &&
      data.description &&
      data.numOfOpenings
    )
  ) {
    res.status(400).json({
      code: "bad-data",
      message:
        "The data was either missing a logo key, position key, contract key, location key, company key, description key, a number of openings key, or tools key",
    })
  }
  await prisma.internship.create({
    data: data,
  })
  res.status(200).send("Valid Data!!!!")
}
export default handler

import prisma from "db"
import { internshipType } from "types"

import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
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
        data.numOfOpenings &&
        data.duration
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
    res.status(200).json({
      code: "success",
    })
  } catch {
    res.status(500).json({
      code: "internal-server-error",
    })
  }
}
export default handler

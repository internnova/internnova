import prisma from "db"
import { internshipType, FormDataType, UserAuth0Type } from "types"

export default async function handler(req, res) {
  const { jobId } = req.query
  let internship: null | internshipType = null
  if (jobId) {
    let { data, user } = req.body
    data = data as FormDataType
    user = user as UserAuth0Type
    internship = await prisma.internship.findFirst({
      where: {
        id: Number(jobId),
      },
    })
    if (internship !== null) {
      const internUserObj = await prisma.user.findFirst({
        where: {
          email: user ? (user.email as string) : " ",
        },
      })

      const userFromDb = await prisma.user.findFirst({
        where: {
          email: user.email,
        },
      })

      if (internUserObj && user && userFromDb) {
        await prisma.application.create({
          data: {
            Internship: {
              connect: {
                id: internship.id,
              },
            },
            internName: data.name,
            internEmail: data.email,
            internPhoneNumber: data.tel,
            aboutIntern: data.about,
            internUserObj: {
              connect: {
                id: userFromDb.id,
              },
            },
          },
        })
        res.status(200).json({ code: "success" })
      } else {
        res.status(500).json({ code: "internal-server-error" })
      }
    } else {
      res.status(400).json({
        code: "bad_data",
        message: "Make sure the data is valid.",
      })
    }
  } else {
    res.status(400).json({
      code: "no-internship-found",
      message: "wrong or missing slug",
    })
  }
}

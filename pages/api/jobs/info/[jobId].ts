import prisma from "db"

export default async function handler(req, res) {
  const { jobId } = req.query
  let internship: any = null
  if (jobId) {
    internship = await prisma.internship.findFirst({
      where: {
        id: Number(jobId),
      },
    })
    if (internship !== null) {
      res.status(200).json({
        code: "success",
        data: internship,
      })
    } else {
      res.status(400).json({
        code: "no-internship-found",
        message: "wrong or missing slug",
      })
    }
  } else {
    res.status(400).json({
      code: "no-internship-found",
      message: "wrong or missing slug",
    })
  }
}

import prisma from "db"

export default async function handler(req, res) {
  const { jobId } = req.query
  let internship: any = null
  if (jobId) {
    const { data, user } = req.body
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

      if (internUserObj && user) {
        await prisma.application.create({
          data: {
            internName: data.name,
            internEmail: data.email,
            internPhoneNumber: data.tel,
            aboutIntern: data.about,
            internUserObj: user,
            Internship: internship,
          },
        })
        res.staus(200).json({ code: "success" })
      } else {
        res.staus(500).json({ code: "internal-server-error" })
      }
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

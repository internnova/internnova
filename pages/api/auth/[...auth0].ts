import prisma from "db"
import { handleAuth, handleCallback } from "@auth0/nextjs-auth0"

const afterCallback = async (req, res, session, state) => {
  try {
    await prisma.user.create({
      data: {
        name: session.user.name as string,
        email: session.user.email as string,
        picture:
          (session.user.picture as string) ||
          "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg",
      },
    })
  } catch {}
  return session
}

export default handleAuth({
  async callback(req, res) {
    await handleCallback(req, res, { afterCallback })
  },
})

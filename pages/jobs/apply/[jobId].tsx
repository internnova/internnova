import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useUser } from "@auth0/nextjs-auth0"

const JobListing = (response: any) => {
  const router = useRouter()
  const { user, error, isLoading } = useUser()

  if (!user) {
    return (
      <>
        <section className="h-screen w-screen bg-gradient-to-r from-variant-1 to-variant-2">
          <div className="flex h-screen justify-center items-center">
            <div>
              <a href="/api/auth/login">
                <h1 className="text-4xl md:text-6xl text-center text-fgvar underline ">
                  Login to apply
                </h1>
              </a>
            </div>
          </div>
        </section>
      </>
    )
  }

  useEffect(() => {
    if (response.code === "no-internship-found") {
      router.push("/404")
    }
  }, [response.code, router])

  return (
    <>
      <p>Post: {JSON.stringify(response.data)}</p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { jobId } = context.query
  const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/jobs/apply/${jobId}`)
  let response = await res.json()
  return { props: { ...response } }
}

export default JobListing

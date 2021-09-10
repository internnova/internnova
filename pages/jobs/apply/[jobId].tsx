import { GetServerSideProps } from "next"
import { FaLocationArrow } from "react-icons/fa"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useUser } from "@auth0/nextjs-auth0"
import Navbar from "components/Navbar"
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
        ``
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
      <div className="py-10 px-7 sm:px-10 md:px-20 xl:container mx-auto w-screen relative">
        <header className="mb-8 mt-5">
          <Navbar />
        </header>
        <div className="flex items-center mb-8 justify-center gap-3 flex-col">
          <img src={response.data["logo"]} width="80em"></img>
          <h1 className="text-center text-variant-2 text-4xl font-bold ">
            Apply for {response.data["company"]}
          </h1>
          <h5 className="text-center text-2xl">
            Position: <span className="font-bold text-variant-2">{response.data.position}</span>
          </h5>
        </div>
        <div className="container m-auto">
          <div className="flex gap-4 justify-between">
            <div className="flex gap-3">
              <span className="px-4 py-2 bg-variant-2 hover:bg-opacity-90 cursor-pointer duration-200 text-[#ffff] font-bold rounded-full ">
                Contract: {response.data.contract}
              </span>
              <span className="px-4 py-2 bg-variant-2 hover:bg-opacity-90 cursor-pointer duration-200 text-[#ffff] font-bold rounded-full">
                Duration: {response.data.duration}
              </span>
              <span className="px-4 py-2 bg-variant-2 hover:bg-opacity-90 cursor-pointer duration-200 text-[#ffff] font-bold rounded-full">
                Number of Openings: {response.data.numOfOpenings}
              </span>
            </div>
            <div>
              <span className="px-4 py-2 bg-variant-2 hover:bg-opacity-90 cursor-pointer duration-200 text-[#ffff] font-bold rounded-full">
                Location: {response.data.location}
              </span>
            </div>
          </div>
          <div className="mt-8">
            <div>
              <h3 className="text-[#0f0f0f] text-2xl font-bold">Description</h3>
              {/*make it nova green, no it wasn't looking good ok the hr does not look good, hmmm any ideas?
              make a custom hr with div and make it in the middle a short line, awesome
               */}
              <div className="flex w-full justify-start">
                <div className="border-b-2 my-4 border-gray w-[calc(100%-50%)]"></div>
              </div>
              {/* <hr className="my-4 text-gray" /> */}
              <span
                className="font-semibold
                 w-[calc(100%-20%)] text-[#0f0f0f]"
              >
                {response.data.description}
              </span>
            </div>
            <button className="bg-variant-2 py-2 px-7 my-5 text-[#fff] rounded-xl hover:bg-opacity-90 duration-200">
              Apply now
            </button>
          </div>
        </div>
      </div>
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

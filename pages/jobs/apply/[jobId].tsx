import { useForm } from "react-hook-form"
import { useState } from "react"
import { IoMdArrowRoundBack } from "react-icons/io"
import Loading from "components/Loading"
import { GetServerSideProps } from "next"
import { useUser } from "@auth0/nextjs-auth0"
import { useRouter } from "next/router"
import { useEffect } from "react"
import prisma from "db"

type FormData = {
  name: string
  email: string
  tel: string
  about: string
}

const ApplyPage = (response: any) => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const [result, setResult] = useState("")
  const [characterCount, setCharacterCount] = useState(0)
  const { user, isLoading } = useUser()
  const { jobId } = router.query
  const internship = response.data

  const onSubmit = async (data: FormData) => {
    fetch(`http://localhost:3000/api/jobs/apply/${jobId}`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, user }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
  }

  if (isLoading) {
    return <Loading />
  }

  // useEffect(() => {
  //   if (response.code === "no-internship-found") {
  //     router.push("/404")
  //   }
  // }, [router, response.code])

  if (!user) {
    return (
      <>
        <section className="hr-screen w-screen bg-gradient-to-r from-variant-1 to-variant-2">
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

  return (
    <div>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="pl-6 pt-10 md:pl-10">
              <h3 className="text-3xl md:text-xl lg:text-3xl font-medium leading-6 text-variant-2">
                Apply for internship
              </h3>
              <p className="mt-1 text-sm text-gray-600 mb-4">
                All this information will be sent to the company
              </p>
              <a
                className="py-2 px-4 bg-transparent text-variant-2 font-semibold border border-variant-2 rounded hover:bg-variant-2 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-4 hover:shadow-lg hover:text-[#fff] inline-flex items-center"
                href="/"
              >
                <IoMdArrowRoundBack />
                <span className="pl-2">Go back</span>
              </a>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        {" "}
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          {...register("name")}
                          type="text"
                          name="name"
                          id="name"
                          className="focus:ring-variant-2 focus:border-variant-2 flex-1 block w-full rounded-none rounded-r-md rounded-l-md sm:text-sm border-gray-300"
                          placeholder="Enter your name"
                          defaultValue={user ? (user.name as string) : "ERROR"}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          {...register("email")}
                          type="email"
                          name="email"
                          id="email"
                          className="focus:ring-variant-2 focus:border-variant-2 flex-1 block w-full rounded-none rounded-r-md rounded-l-md sm:text-sm border-gray-300"
                          defaultValue={user ? (user.email as string) : "ERROR"}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          {...register("tel")}
                          type="tel"
                          name="tel"
                          placeholder="8888888888"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          required
                          className="focus:ring-variant-2 focus:border-variant-2 flex-1 block w-full rounded-none rounded-r-md rounded-l-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      About you(try incorporating the points below)
                      <ol className="list-decimal pl-10">
                        <li>Past Experiences</li>
                        <li>Tools you know how to use</li>
                        <li>Why should you be given this internship?</li>
                      </ol>
                    </label>
                    <div className="mt-1">
                      <textarea
                        {...register("about")}
                        id="about"
                        name="about"
                        rows={10}
                        minLength={150}
                        maxLength={1500}
                        className="shadow-sm focus:ring-variant-2 focus:border-variant-2 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Enter your text here"
                        defaultValue={""}
                        onChange={(e) => setCharacterCount(e.target.value.length)}
                        required
                      />
                      <p className="block text-sm font-medium text-gray-700">
                        Total Number of characters: {characterCount}
                      </p>
                      {characterCount <= 150 ? (
                        <p className="block text-sm font-medium text-gray-700">
                          Minimum number of characters: 150
                        </p>
                      ) : (
                        <p className="block text-sm font-medium text-gray-700">
                          Maximum number of characters: 1500
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <p>{result}</p>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-variant-2 md:mt-8 md:mb-16"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { jobId } = context.query
  const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/jobs/info/${jobId}`)
  let response = await res.json()
  return { props: { ...response } }
}

export default ApplyPage

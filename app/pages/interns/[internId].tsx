import Layout from "app/core/layouts/Layout"
import getIntern from "app/interns/queries/getIntern"
import { Head, useQuery, useParam, BlitzPage, Image, Link } from "blitz"
import { Suspense } from "react"

export const Intern = () => {
  const internId = useParam("internId", "number")
  const [intern] = useQuery(getIntern, { id: internId })
  const avatar = "/images/default_profile.png"
  const replaceStr = (str: string) => str.replace(/([\s,\/])/g, "-")

  return (
    <>
      <Head>
        <title>{intern.user.name} | Profile</title>
      </Head>
      <main className="select-none">
        <div className="profile">
          <div className="py-[30px]">
            <div className="flex items-stretch">
              <div className="grow grid justify-center items-center w-[140px]">
                <Image
                  src={avatar}
                  alt="Profile Image"
                  width={140}
                  height={140}
                  className="rounded-full"
                />
              </div>
              <section className="basis-[30px] grow-[2] flex flex-col gap-4">
                <h2 className="text-[28px] font-light">{intern.user.name}</h2>
                <h2 className="text-[20px] font-light">{intern.oneliner}</h2>
                <div className="flex flex-col gap-2">
                  <h3 className="font-light">Interested in:</h3>
                  <div className="flex lg:flex-row gap-2">
                    {intern.interests.map((interest) => (
                      <Link key={interest} href={`/jobs/s/${replaceStr(interest.toLowerCase())}`}>
                        <a
                          className="text-sm font-light hover:bg-indigo-600 hover:text-white p-[0.6ch] rounded-md transition-color duration-200"
                          style={{ border: "1px solid rgb(79 70 229)" }}
                        >
                          {interest}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="w-full" style={{ borderTop: "1px solid rgba(23,23,23, 0.2)" }} />
          <div className="py-6 my-8 px-4 w-full bg-gray-300">
            <div className="flex flex-col gap-2">
              <h3 className="font-normal">About Me:</h3>
              <p className="text-md">{intern.bio}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

const ShowInternPage: BlitzPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Intern />
    </Suspense>
  )
}

ShowInternPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowInternPage

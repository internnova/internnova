import { Suspense } from "react"
import { Head, Link, useQuery, useParam, BlitzPage, Image } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Spinner } from "app/core/components/Spinner"
import { Job } from "app/core/components/Job"
import getUser from "app/users/queries/getUser"
import getCompany from "app/companies/queries/getCompany"

export const slugify = (str: string) => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")
}

interface CompProps {
  user: {
    username: string
    name: string
  }
}

const avatar = "/images/default_profile.png"

const Company = ({ user: { name, username } }: CompProps) => {
  const [{ website, jobs, description }] = useQuery(
    getCompany,
    { where: { user: { username } } },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )

  return (
    <div className="select-none">
      <div className="profile">
        <div className="py-[30px]">
          <div className="flex flex-col sm:flex-row items-stretch">
            <div className="grow grid justify-center items-center w-[100px] sm:w-[140px]">
              <Image
                src={avatar}
                alt="Profile Image"
                width={140}
                height={140}
                className="rounded-full"
              />
            </div>
            <section className="basis-[30px] grow-[2] flex flex-col gap-4 pl-2 sm:pl-0 about-me">
              <div>
                <h2 className="text-[28px] font-light">{name}</h2>
                <Link href={`/companies/${username}`}>
                  <a className="cursor-pointer">
                    <h3 className="font-light">@{username}</h3>
                  </a>
                </Link>
              </div>
              <h2 className="text-[20px] font-light">
                <Link href={`${website}`}>
                  <a className="text-indigo-600">{website}</a>
                </Link>
              </h2>
            </section>
          </div>
        </div>
        <div className="w-full" style={{ borderTop: "1px solid rgba(23,23,23, 0.2)" }} />
        <div className="py-6 my-8 px-4 w-full bg-white">
          <div className="flex flex-col gap-2 about-me">
            <h3 className="font-normal">Description:</h3>
            <div className="relative flex items-center">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Positions open:</h3>
          <div>
            {jobs.map((job) => (
              <Job key={`${job.id}`} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Intern = ({
  user: {
    name,
    username,
    intern: { oneliner, interests, bio },
  },
}: any) => {
  return (
    <div className="profile select-none">
      <div className="py-[30px]">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-stretch">
          <div className="sm:grow grid justify-center items-center w-[100px] sm:w-[140px]">
            <Image
              src={avatar}
              alt="Profile Image"
              width={140}
              height={140}
              className="rounded-full"
            />
          </div>
          <section className="basis-[30px] grow-[2] flex flex-col pl-2 sm:pl-0 gap-4 about-me">
            <div>
              <h2 className="text-[28px] font-light">{name}</h2>
              <Link href={`/interns/${username}`}>
                <a className="cursor-pointer">
                  <h3 className="font-light">@{username}</h3>
                </a>
              </Link>
            </div>
            <h2 className="text-[20px] font-light">{oneliner}</h2>
            <div className="flex flex-col gap-2">
              <h3 className="font-light">Interested in:</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                {interests.map((interest) => (
                  <Link key={interest} href={`/jobs/s/${slugify(interest)}`}>
                    <a className="text-sm font-light bg-[rgba(36,32,32,0.9)] text-white p-[0.7ch] rounded-md w-1/2 sm:w-auto">
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
      <div className="py-6 my-8 px-4 w-full bg-white">
        <div className="flex flex-col gap-2 about-me">
          <h3 className="font-normal">About Me:</h3>
          <div className="relative flex items-center">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProfilePage: BlitzPage = () => {
  const username = useParam("userName", "string")
  const [user] = useQuery(getUser, { where: { username } })

  if (!user) {
    return <></>
  }

  return (
    <>
      <Head>
        <title>{user.name} | Profile</title>
      </Head>
      <div className="pt-4 pb-10 h-auto">
        <Suspense fallback={<Spinner />}>
          {user.role === "COMPANY" ? <Company user={user} /> : <Intern user={user} />}
        </Suspense>
      </div>
    </>
  )
}

ProfilePage.getLayout = (page) => <Layout>{page}</Layout>

export default ProfilePage

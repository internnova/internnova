import Layout from "app/core/layouts/Layout"
import getIntern from "app/interns/queries/getIntern"
import { Head, useQuery, useParam, BlitzPage, Image, Link, useMutation, Router } from "blitz"
import { Suspense, useState } from "react"
import { BsPencilSquare, BsCheck2Circle } from "react-icons/bs"
import { useCurrentUser } from "../../../core/hooks/useCurrentUser"
import updateIntern from "../../../interns/mutations/updateIntern"
import { Popup } from "../../../core/components/Popup"
import { EditForm } from "../../../core/components/EditForm"
import { UpdateIntern } from "../../../auth/validations"
import { Spinner } from "../../../core/components/Spinner"

export const slugify = (str: string) => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")
}

export const Intern = () => {
  const internName = useParam("internName", "string")
  const [
    {
      user: { name, username },
      oneliner,
      interests,
      bio,
      userId,
    },
  ] = useQuery(getIntern, { where: { user: { username: internName } } })
  const [description, setDescription] = useState(bio)
  const avatar = "/images/default_profile.png"
  const user = useCurrentUser()
  const userIsOwner = user?.id === userId
  const [updateInternMut] = useMutation(updateIntern)
  const [editMode, setEditMode] = useState(false)

  return (
    <>
      <Head>
        <title>{name} | Profile</title>
      </Head>
      <div className="profile select-none">
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
            <section className="basis-[30px] grow-[2] flex flex-col gap-4 about-me">
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
                <div className="flex lg:flex-row gap-2">
                  {interests.map((interest) => (
                    <Link key={interest} href={`/jobs/s/${slugify(interest)}`}>
                      <a className="text-sm font-light bg-[rgba(36,32,32,0.9)] text-white p-[0.7ch] rounded-md">
                        {interest}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
            <div className={`opacity-0 ${userIsOwner ? "" : "hidden"}`}>
              <button onClick={() => setEditMode(true)}>
                <BsPencilSquare className="h-[24px] w-[24px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full" style={{ borderTop: "1px solid rgba(23,23,23, 0.2)" }} />
        <div className="py-6 my-8 px-4 w-full bg-white">
          <div className="flex flex-col gap-2 about-me">
            <h3 className="font-normal">About Me:</h3>
            <div className="relative flex items-center">
              <textarea
                className={`text-[15px] pr-2 border-none w-full resize-none outline-none ${
                  userIsOwner &&
                  "hover:outline-[1px] hover:outline-neutral-800 focus:border-neutral-800 focus:ring-neutral-800"
                } p-1 desc-input transition-all duration-300`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={!userIsOwner}
              />
              <button
                className="absolute bg-transparent grid place-center opacity-0 right-0 p-2"
                onClick={async () => updateInternMut({ userId, description })}
              >
                <BsCheck2Circle className="h-[18px] w-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {editMode && (
        <Popup title="Edit Profile" scroll={false} close={() => setEditMode(false)}>
          <EditForm
            schema={UpdateIntern}
            initialValues={{ name, username, oneliner }}
            submitText="Update"
            onSubmit={async (values) => {
              const { user } = await updateInternMut({ userId, ...values })
              setEditMode(false)
              Router.push(`/interns/${user.username}`)
            }}
          />
        </Popup>
      )}
    </>
  )
}

const ShowInternPage: BlitzPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Intern />
    </Suspense>
  )
}

ShowInternPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowInternPage

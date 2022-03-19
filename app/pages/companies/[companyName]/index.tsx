import { Suspense, useState } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Image } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCompany from "app/companies/queries/getCompany"
import { BsCheck2Circle, BsPencilSquare } from "react-icons/bs"
import { useCurrentUser } from "../../../core/hooks/useCurrentUser"
import updateCompany from "../../../companies/mutations/updateCompany"
import { Popup } from "../../../core/components/Popup"
import { FORM_ERROR, EditForm } from "../../../core/components/EditForm"
import { UpdateCompany } from "../../../auth/validations"
import { Job } from "../../../core/components/Job"
import { Spinner } from "../../../core/components/Spinner"

export const Company = () => {
  const router = useRouter()
  const username = useParam("companyName", "string")
  const [
    {
      user: { name },
      website,
      userId,
      jobs,
      ...company
    },
    { setQueryData },
  ] = useQuery(
    getCompany,
    { where: { user: { username } } },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const user = useCurrentUser()
  const userIsOwner = user?.id === userId
  const [updateCompanyMutation] = useMutation(updateCompany)
  const [description, setDescription] = useState(company.description)
  const [editMode, setEditMode] = useState(false)
  const avatar = "/images/default_profile.png"

  return (
    <>
      <Head>
        <title>{name} | Profile</title>
      </Head>
      <div className="select-none">
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
              <section className="basis-[30px] grow-[2] flex flex-col gap-4 about-me">
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
              <h3 className="font-normal">Description:</h3>
              <div className="relative flex items-center">
                <textarea
                  className={`text-[15px] pr-2 border-none w-full resize-none outline-none ${
                    userIsOwner &&
                    "hover:outline-[1px] hover:outline-neutral-800 focus:border-neutral-800 focus:ring-neutral-800"
                  } p-1 desc-input transition-all duration-300`}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={!userIsOwner}
                  value={description}
                />
                <button
                  className="absolute bg-transparent grid place-center opacity-0 right-0 p-2"
                  onClick={async () => updateCompanyMutation({ userId, description })}
                >
                  <BsCheck2Circle className="h-[18px] w-[18px]" />
                </button>
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
      {editMode && (
        <Popup title="Edit Company" scroll={false} close={() => setEditMode(false)}>
          <EditForm
            submitText="Update Company"
            isCompany
            schema={UpdateCompany}
            initialValues={{ name, username, website: website! }}
            onSubmit={async (values) => {
              try {
                const { company, user } = await updateCompanyMutation({ ...values, userId })
                await setQueryData({ ...company, jobs, user })
                setEditMode(false)
                router.push(`/companies/${user.username}`)
              } catch (error: any) {
                return {
                  [FORM_ERROR]: error.toString(),
                }
              }
            }}
          />
        </Popup>
      )}
    </>
  )
}

const ShowCompanyPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Company />
      </Suspense>
    </div>
  )
}

ShowCompanyPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowCompanyPage

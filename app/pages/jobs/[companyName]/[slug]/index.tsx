import companyInDb from "app/companies/queries/companyInDb"
import {Button} from "app/core/components/Button"
import {Popup} from "app/core/components/Popup"
import {Spinner} from "app/core/components/Spinner"
import Layout from "app/core/layouts/Layout"
import deleteJob from "app/jobs/mutations/deleteJob"
import getJob from "app/jobs/queries/getJob"
import {
  BlitzPage,
  Head,
  Link,
  Routes,
  useMutation,
  useParam,
  useQuery,
  useRouter,
  useSession,
} from "blitz"
import {useState} from "react"
import {Suspense} from "react"

export const Job = () => {
  const router = useRouter()
  const slug = useParam("slug", "string")
  const companyName = useParam("companyName", "string")
  const [job] = useQuery(getJob, {slug, companyName})
  const session = useSession()
  const [doesCompanyExist] = useQuery(companyInDb, {
    username: companyName || "THISCOMPANYNAMECANTECHNICALLYNEVEREXISTORITSANABNOMALLY",
  })
  const [popupVisible, setPopupVisible] = useState<boolean>(false)
  const [deleteJobMutation] = useMutation(deleteJob)
  console.log(job?.description)

  if (job) {
    const {
      displayName,
      companyName,
      position,
      description,
      location,
      salary,
      jobType,
      skillsRequired: skills,
      duration,
      industry,
    } = job
    return (
      <>
        <Head>
          <title>
            {position || slug} @{displayName}
          </title>
        </Head>
        <div>
          <div className="profile pt-16">
            <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
              <h1>
                <span className="mt-2 block text-base uppercase tracking-wide text-gray-500">
                  Join as a
                </span>
                <span className="font-cal block text-2xl text-gray-900 sm:text-3xl">
                  {position}{" "}
                  {doesCompanyExist ? (
                    <Link href={`/${companyName}`}>
                      <a className="text-indigo-500">@{displayName}</a>
                    </Link>
                  ) : (
                    <a className="text-indigo-500">@{displayName}</a>
                  )}
                </span>
              </h1>
              {session.userId === job.companyId && (
                <div className="flex space-x-6">
                  <Link href={`/jobs/${companyName}/${slug}/edit`}>
                    <a className="text-indigo-500 cursor-pointer hover:underline">Edit</a>
                  </Link>
                  <div>
                    <a
                      onClick={() => setPopupVisible(true)}
                      className="text-indigo-500 cursor-pointer hover:underline"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              )}
              {popupVisible && (
                <Popup
                  title="Confirm deletion"
                  scroll={false}
                  {...{style: {height: "25ch", width: "35ch"}}}
                >
                  <div className="flex flex-col gap-6 py-10 px-8 mb-4">
                    <div className="">
                      Are you sure you want to delete this job? This action is not reverable.
                    </div>
                    <Button
                      onClick={async () => {
                        await deleteJobMutation({id: job.id})
                        setPopupVisible(false)
                        router.push("/jobs")
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Popup>
              )}

              <div className="flex flex-col gap-4">
                <h2>Description:</h2>
                <p className="text-xl long-text">{description}</p>
              </div>
              <div className="flex flex-col gap-4">
                <h2>Internship details:</h2>
                <ul className="px-6">
                  <li>
                    <span className="text-lg">{jobType.replace("_", " ")} Position</span>
                  </li>
                  <li>
                    <span className="text-lg">Industry: {industry}</span>
                  </li>
                  <li>
                    <span className="text-lg">Duration: {duration} month(s)</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h2>Skills Required:</h2>
                <ul className="px-6">
                  {skills.map((skill, idx) => (
                    <li key={`${idx}`}>
                      <span className="text-lg">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h2>What the company offers:</h2>
                <ul className="px-6">
                  {salary && parseInt(salary) > 100 && (
                    <li>
                      <span className="text-lg">₹{salary} (monthly basis)</span>
                    </li>
                  )}
                  <li>
                    <span className="text-lg">Location: {location}</span>
                  </li>
                </ul>
              </div>
              {session.role === "INTERN" &&
                job.applications &&
                !job.applications
                  .map((application) => application.internId)
                  .includes(session?.userId || NaN) && (
                  <Link href={Routes.NewJobApplicationPage({jobSlug: job.slug})}>
                    <a className="flex gap-2 items-center">
                      <p className="text-lg">Looks good?</p>
                      <Button options="px-2">Apply Now!</Button>
                    </a>
                  </Link>
                )}
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return <>Job not found</>
  }
}

const ShowJobPage: BlitzPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Job />
    </Suspense>
  )
}

ShowJobPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowJobPage

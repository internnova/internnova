import Layout from "app/core/layouts/Layout"
import { Head, Image, useParam, BlitzPage, usePaginatedQuery, Link } from "blitz"
import { Suspense } from "react"
import getJobs from "../../../jobs/queries/getJobs"
import companyName from "../../companies/[companyName]"
import { Spinner } from "../../../core/components/Spinner"
import { Job as JobCard } from "../../../core/components/Job"

export const Job = () => {
  const companyName = useParam("companyName", "string")
  const [{ jobs }] = usePaginatedQuery(getJobs, {
    where: { companyName },
    orderBy: { id: "asc" },
  })

  if (jobs.length !== 0) {
    return (
      <>
        <Head>
          <title>Jobs {companyName}</title>
        </Head>
        <div className="h-[90vh] overflow-x-hidden">
          <div className="mt-4 flex flex-col gap-4">
            <h2>
              Positions open{" "}
              <Link href={`/companies/${companyName}`}>
                <a>@{companyName}</a>
              </Link>
            </h2>
            <div>
              {jobs.map((job) => (
                <JobCard key={`${job.id}`} job={job} />
              ))}
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div className="h-[90vh] grid place-center">
        <div className="flex flex-col justify-center items-center gap-6">
          <Image
            src="/images/no-jobs.svg"
            alt="No jobs listed by this company"
            className="select-none"
            height={400}
            width={400}
          />
          <h2 className="font-light">This company hasn&apos;t listed any jobs</h2>
        </div>
      </div>
    )
  }
}

const CompanyPositions: BlitzPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Job />
    </Suspense>
  )
}

CompanyPositions.getLayout = (page) => <Layout>{page}</Layout>

export default CompanyPositions

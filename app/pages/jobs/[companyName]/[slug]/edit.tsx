import { Spinner } from "app/core/components/Spinner"
import Layout from "app/core/layouts/Layout"
import { JobForm, FORM_ERROR } from "app/jobs/components/JobForm"
import updateJob, { UpdateJobClient } from "app/jobs/mutations/updateJob"
import getJob from "app/jobs/queries/getJob"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import { Suspense } from "react"
import { z } from "zod"

export const EditJob = () => {
  const router = useRouter()
  const slug = useParam("slug", "string")
  const companyName = useParam("companyName", "string")
  const [job, { setQueryData }] = useQuery(
    getJob,
    { slug, companyName },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateJobMutation] = useMutation(updateJob)

  if (!job) {
    router.push("/jobs")
    return <></>
  } else {
    return (
      <>
        <Head>
          <title>Edit Job {job.position}</title>
        </Head>
        <div className="pt-8">
          <div className="pl-8">
            <h1>Edit Job {job.position}</h1>
          </div>
          <JobForm
            submitText="Update Job"
            schema={UpdateJobClient}
            initialValues={{
              ...job,
              salary: job.salary || undefined,
              skillsRequired: job.skillsRequired.join(", "),
            }}
            onSubmit={async (values) => {
              try {
                console.log(values)
                const updated = await updateJobMutation({
                  ...values,
                  id: job.id,
                  skillsRequired: values.skillsRequired?.split(", ") || undefined,
                })
                await setQueryData({
                  ...updated,
                  company: job.company,
                  applications: job.applications,
                })
                router.push(
                  Routes.ShowJobPage({ slug: updated.slug, companyName: updated.companyName })
                )
              } catch (error: any) {
                console.error(error)
                return {
                  [FORM_ERROR]: error.toString(),
                }
              }
            }}
          />
        </div>
      </>
    )
  }
}

const EditJobPage: BlitzPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <main className="px-4 sm:px-6 md:px-8">
        <EditJob />
      </main>
    </Suspense>
  )
}

EditJobPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditJobPage

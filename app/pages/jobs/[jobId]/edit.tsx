import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getJob from "app/jobs/queries/getJob"
import { z } from "zod"
import updateJob, { UpdateJobClient } from "app/jobs/mutations/updateJob"
import { JobForm, FORM_ERROR } from "app/jobs/components/JobForm"

export const EditJob = () => {
  const router = useRouter()
  const jobId = useParam("jobId", "number")
  const [job, { setQueryData }] = useQuery(
    getJob,
    { id: jobId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateJobMutation] = useMutation(updateJob)
  const clientSkills = z.object({ skillsRequired: z.optional(z.string()) })

  return (
    <>
      <Head>
        <title>Edit Job {job.id}</title>
      </Head>

      <div>
        <h1>Edit Job {job.id}</h1>
        <pre>{JSON.stringify(job, null, 2)}</pre>

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
              router.push(Routes.ShowJobPage({ jobId: updated.id }))
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

const EditJobPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditJob />
      </Suspense>

      <p>
        <Link href={Routes.JobsPage()}>
          <a>Jobs</a>
        </Link>
      </p>
    </div>
  )
}

EditJobPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditJobPage

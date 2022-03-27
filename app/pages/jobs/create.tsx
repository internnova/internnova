import Layout from "app/core/layouts/Layout"
import { useRouter, useMutation, BlitzPage, Routes } from "blitz"
import { JobForm } from "app/jobs/components/JobForm"
import createJob from "app/jobs/mutations/createJob"
import Image from "next/image"
import { CreateJobClient } from "../../auth/validations"
import { useCurrentUser } from "../../core/hooks/useCurrentUser"

const NewJobPage: BlitzPage = () => {
  const router = useRouter()
  const [createJobMutation] = useMutation(createJob)
  const user = useCurrentUser()

  return (
    <div className="h-screen select-none">
      <h1 className="pt-8 md:h-0 text-center tracking-4">Create a new job</h1>
      <div className="flex gap-10 justify-center items-center w-full h-auto pb-4">
        <JobForm
          submitText="Create Job"
          schema={CreateJobClient}
          onSubmit={async (values) => {
            const { slug, companyName } = await createJobMutation({
              ...values,
              skillsRequired: values.skillsRequired.split(", "),
              companyName: user!.username,
            })
            router.push(Routes.ShowJobPage({ slug, companyName }))
          }}
        />
        <div className="hidden lg:block">
          <Image src="/images/add-job.svg" alt="Add Job" width={580} height={580} />
        </div>
      </div>
    </div>
  )
}

NewJobPage.getLayout = (page) => <Layout title={"Create New Job"}>{page}</Layout>

export default NewJobPage

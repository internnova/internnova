import Layout from "app/core/layouts/Layout"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import { Suspense } from "react"
import { CompanyForm, FORM_ERROR } from "app/companies/components/CompanyForm"
import updateCompany, { UpdateCompany } from "app/companies/mutations/updateCompany"
import getCompany from "app/companies/queries/getCompany"

export const EditCompany = () => {
  const router = useRouter()
  const companyId = useParam("companyId", "number")
  const [company, { setQueryData }] = useQuery(
    getCompany,
    { id: companyId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateCompanyMutation] = useMutation(updateCompany)

  return (
    <>
      <Head>
        <title>Edit Company {company.id}</title>
      </Head>

      <div>
        <h1>Edit Company {company.id}</h1>
        <pre>{JSON.stringify(company, null, 2)}</pre>

        <CompanyForm
          submitText="Update Company"
          schema={UpdateCompany}
          initialValues={{
            name: company.name,
            description: company.description,
            logo: company.logo || undefined,
            website: company.website || undefined,
          }}
          onSubmit={async (values) => {
            try {
              const updated = await updateCompanyMutation({
                ...values,
                id: company.id,
              })
              await setQueryData({ ...updated, jobs: company.jobs })
              router.push(Routes.ShowCompanyPage({ companyId: updated.id }))
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

const EditCompanyPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditCompany />
      </Suspense>

      <p>
        <Link href={Routes.Home()}>
          <a>Home</a>
        </Link>
      </p>
    </div>
  )
}

EditCompanyPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditCompanyPage

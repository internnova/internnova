import { Suspense } from "react"
import {
  Head,
  Link,
  useRouter,
  useQuery,
  useParam,
  BlitzPage,
  useMutation,
  Routes,
  useSession,
} from "blitz"
import Layout from "app/core/layouts/Layout"
import getCompany from "app/companies/queries/getCompany"
import deleteCompany from "app/companies/mutations/deleteCompany"

export const Company = () => {
  const router = useRouter()
  const companyId = useParam("companyId", "number")
  const [deleteCompanyMutation] = useMutation(deleteCompany)
  const [company] = useQuery(getCompany, { id: companyId })
  const session = useSession()

  return (
    <>
      <Head>
        <title>Company {company.id}</title>
      </Head>

      <div>
        <h1>Company {company.id}</h1>
        <pre>{JSON.stringify(company, null, 2)}</pre>

        <Link href={Routes.EditCompanyPage({ companyId: company.id })}>
          <a>Edit</a>
        </Link>

        {company.id === session.userId && (
          <button
            type="button"
            onClick={async () => {
              if (window.confirm("This will be deleted")) {
                await deleteCompanyMutation({ id: company.id })
                router.push(Routes.Home())
              }
            }}
            style={{ marginLeft: "0.5rem" }}
          >
            Delete
          </button>
        )}
      </div>
    </>
  )
}

const ShowCompanyPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.Home()}>
          <a>Home</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Company />
      </Suspense>
    </div>
  )
}

ShowCompanyPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowCompanyPage

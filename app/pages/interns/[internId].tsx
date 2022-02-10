import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getIntern from "app/interns/queries/getIntern"
import deleteIntern from "app/interns/mutations/deleteIntern"

export const Intern = () => {
  const router = useRouter()
  const internId = useParam("internId", "number")
  const [deleteInternMutation] = useMutation(deleteIntern)
  const [intern] = useQuery(getIntern, { id: internId })

  return (
    <>
      <Head>
        <title>Intern {intern.id}</title>
      </Head>

      <div>
        <h1>Intern {intern.id}</h1>
        <pre>{JSON.stringify(intern, null, 2)}</pre>
      </div>
    </>
  )
}

const ShowInternPage: BlitzPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Intern />
    </Suspense>
  )
}

ShowInternPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowInternPage

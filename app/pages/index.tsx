import Layout from "app/core/layouts/Layout"
import { BlitzPage, useRouter } from "blitz"
import { Suspense } from "react"
import { Spinner } from "app/core/components/Spinner"
import { useCurrentUser } from "../core/hooks/useCurrentUser"

const Home: BlitzPage = () => {
  const router = useRouter()
  const user = useCurrentUser()
  router.push("/jobs")
  return <Suspense fallback={<Spinner />} />
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home

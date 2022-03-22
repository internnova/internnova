import { BlitzPage, Link } from "blitz"
import { Suspense, useState } from "react"
import Layout from "../../core/layouts/Layout"
import { Spinner } from "../../core/components/Spinner"
import { BsFillPersonFill, BsFillChatDotsFill, BsKeyFill } from "react-icons/bs"
import { Profile } from "./components/Profile"
import { Security } from "./components/Security"

const PROFILE = {
  title: "Profile",
  subtitle: "Manage your profile",
}
const HELP = {
  title: "Report",
  subtitle: "Report a bug or request a feature",
}
const SECURITY = {
  title: "Security",
  subtitle: "Change your password",
}

export const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="pt-8 pb-6">
    <div>
      <h2 className="text-xl font-medium">{title}</h2>
      <p>{subtitle}</p>
    </div>
  </div>
)

const SettingsPage: BlitzPage = () => {
  const [navigation, setNavigation] = useState<{ title: string; subtitle: string }>(PROFILE)
  const isActive = (nav: { title: string; subtitle: string }) => navigation === nav

  return (
    <Suspense fallback={<Spinner />}>
      <div className="px-4 sm:px-6 md:px-8">
        <Heading {...navigation} />
        <div className="sm:mx-auto -mb-px flex space-x-2 space-x-5">
          <div
            className={`text-neutral-500 py-4 px-1 navigation hover:text-neutral-600 ${
              isActive(PROFILE) ? "text-neutral-900 border-neutral-900" : ""
            }`}
            onClick={() => setNavigation(PROFILE)}
          >
            <BsFillPersonFill className="text-xl" />
            <p>Profile</p>
          </div>
          <div
            className={`text-neutral-500 py-4 px-1 navigation hover:text-neutral-600 ${
              isActive(SECURITY) ? "text-neutral-900 border-neutral-900" : ""
            }`}
            onClick={() => setNavigation(SECURITY)}
          >
            <BsKeyFill />
            <p>Security</p>
          </div>
          <div
            className={`text-neutral-500 py-4 px-1 navigation hover:text-neutral-600 ${
              isActive(HELP) ? "text-neutral-900 border-neutral-900" : ""
            }`}
            onClick={() => setNavigation(HELP)}
          >
            <BsFillChatDotsFill />
            <p>Report</p>
          </div>
        </div>
        <hr style={{ borderColor: "rgba(225, 225, 225, 0.4)" }} />
        {isActive(PROFILE) && <Profile changePass={() => setNavigation(SECURITY)} />}
        {isActive(SECURITY) && <Security onSuccess={() => setNavigation(PROFILE)} />}
        {isActive(HELP) && (
          <div className="pt-4">
            <div>
              <p>Report an issue by joining our discord:</p>
              <Link href="https://discord.gg/gXWHUBWT7e">
                <a className="text-indigo-600">InternNova Discord</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Suspense>
  )
}

SettingsPage.getLayout = (page) => <Layout title="Settings">{page}</Layout>

export default SettingsPage

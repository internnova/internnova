import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getUser from "../../../lib/helpers/getUser";
import { SupabaseUser } from "../../../lib/SupabaseUser";
import JobsList from "../../Jobs/JobsList";
import Navbar from "./Navbar";

type InternHomepageProps = { user: SupabaseUser };

const InternHomepage = (props: InternHomepageProps) => {
  const [userDb, setUserDb] = useState<User | null | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    if (props.user && props.user.email && userDb !== undefined) {
      setUserDb(getUser(props.user.email) || null);
      if (userDb && userDb.email !== props.user.email) {
        router.push("/onboarding");
      }
    }
  }, [props.user, router, userDb]);

  return (
    <div>
      <Navbar />
      <div className="h-screen bg-gray-50">
        <div className="mx-auto py-10">
          <h1 className="text-4xl pb-2  m-auto text-center">Search For Jobs</h1>
        </div>
        <div>
          <JobsList />
        </div>
      </div>
    </div>
  );
};

export default InternHomepage;

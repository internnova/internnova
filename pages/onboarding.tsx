// import { Role } from "@prisma/client";
import { useState } from "react";
// import AccountOptions from "@components/Forms/AccountOptions";
// import CreateCompany from "@components/Forms/CreateCompany";
import CreateIntern from "../components/Forms/CreateIntern";
import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";
import { User } from "@prisma/client";
import { useEffect } from "react";
import getUser from "../lib/helpers/getUser";

const OnboardingPage = () => {
  const router = useRouter();
  const [userDb, setUserDb] = useState<User | null>(null);
  const { user } = Auth.useUser();
  // const [doneWithStage1, setDoneWithStage1] = useState<boolean>(false);
  // const [accountType, setAccountType] = useState<Role>("STANDARD");
  // console.log(user);
  //
  // if (doneWithStage1 && user) {
  //   if (accountType === "EMPLOYER") {
  //     return <CreateCompany user={user} />;
  //   } else if (accountType === "INTERN") {
  useEffect(() => {
    if (user && user.email) {
      getUser(user.email, setUserDb);
    }
    if (!user) {
      router.push("/login");
    } else if (userDb) {
      router.push("/");
    }
  }, [user, router, userDb]);
  if (user) return <CreateIntern user={user} />;
  else {
    return <></>;
  }
  //   }
  // }

  // return (
  //   <AccountOptions
  //     accountType={accountType}
  //     setAccountType={setAccountType}
  //     setDone={setDoneWithStage1}
  //   />
  // );
};

export default OnboardingPage;

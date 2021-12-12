import InternHomepage from "components/HomePage/Intern";
import { Landing } from "components/HomePage/Unauthorized";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const success = router.query.success ? true : false;
  return (
    <>
      <SignedIn>
        <InternHomepage success={success} />
      </SignedIn>
      <SignedOut>
        <Landing />
      </SignedOut>
    </>
  );
};

export default Index;

import { Landing } from "components/HomePage/Unauthorized";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/router";

const Redirect = () => {
  const router = useRouter();
  router.push("/intern/jobs");
  return <></>;
};

const Index = () => {
  return (
    <>
      <SignedIn>
        <Redirect />
      </SignedIn>
      <SignedOut>
        <Landing />
      </SignedOut>
    </>
  );
};

export default Index;

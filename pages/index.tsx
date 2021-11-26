import InternHomepage from "../components/HomePage/Intern";
import { Landing } from "../components/HomePage/Unauthorized";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Index = () => {
  return (
    <>
      <SignedIn>
        <InternHomepage />
      </SignedIn>
      <SignedOut>
        <Landing />
      </SignedOut>
    </>
  );
};

export default Index;

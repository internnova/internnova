import InternHomepage from "components/HomePage/Intern";
import Meta from "components/Meta";
import { Landing } from "components/HomePage/Unauthorized";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const success = router.query.success ? true : false;
  return (
    <>
      <Meta
        title="InternNova - Find internships, for highschoolers"
        description="Experience the world beyond the confines of a school wall! InternNova makes finding internships easy and accessible to high-school students all over the world."
        keywords={[
          "Education",
          "Internships",
          "High-school",
          "School",
          "Job",
          "Teenager jobs",
          "India",
        ]}
      />
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

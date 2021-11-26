import JobsList from "../components/Jobs/JobsList";
import { useRouter } from "next/router";
import { Tag } from "@prisma/client";

const Jobs = () => {
  const router = useRouter();
  let { interest } = router.query;
  interest = interest as string;
  if (!(Object.values(Tag) as string[]).includes(interest)) {
    return <JobsList />;
  }
};

export default Jobs;

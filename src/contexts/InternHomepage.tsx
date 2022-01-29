import { createContext } from "react";
import { Company, Job } from "@prisma/client";
import { UserOnSteriods } from "lib/helpers/fetchUser";

type InternHomepageContextType = {
  success: boolean;
  successId: string | null;
  applicationId: string | null;
  jobs: (Job & { company: Company })[] | null;
  userDb: UserOnSteriods | null;
  descriptions: {
    compiledSource: string;
    renderedOutput: string;
    scope?: { [key: string | number | symbol]: any };
  }[];
};

const InternHomepageContext = createContext<InternHomepageContextType>({
  success: false,
  successId: null,
  applicationId: null,
  jobs: null,
  userDb: null,
  descriptions: [],
});

export default InternHomepageContext;

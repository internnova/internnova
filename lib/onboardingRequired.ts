import { User } from "@prisma/client";
import { prisma } from "./prisma";

interface OnboardingRequiredReturn {
  props: { error?: string; user?: User | null };
  redirect?: { permanent: boolean; destination: string };
}

const onboardingRequired = async (
  email: string | null
): Promise<OnboardingRequiredReturn> => {
  if (!email) {
    return {
      props: { error: "Email not provided" },
    };
  }

  const user = await prisma.user.findFirst({ where: { email } });

  if (!user || user?.role === "STANDARD" || !(user.email === email)) {
    return {
      redirect: {
        permanent: false,
        destination: "/onboarding",
      },
      props: {},
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }
};

export default onboardingRequired;

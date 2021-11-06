import { User } from "@prisma/client";
import { prisma } from "./prisma";

interface OnboardingRequired {
  props: { error?: string; user?: User | null };
  redirect?: { permanent: boolean; destination: string };
}

export default async (email: string): Promise<OnboardingRequired> => {
  if (!email) {
    return {
      props: { error: "Email not provided" },
    };
  }
  const user = await prisma.user.findFirst({ where: { email } });

  if (user) {
    if (user.role === "STANDARD") {
      return {
        redirect: {
          permanent: false,
          destination: "/onboarding",
        },
        props: {},
      };
    } else {
      return {
        props: { user },
      };
    }
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/api/auth/login",
      },
      props: {},
    };
  }
};

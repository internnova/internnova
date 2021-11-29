import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import "@fontsource/plus-jakarta-sans";
import Meta from "../components/Meta";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "@fontsource/nunito-sans";

const publicPages: string[] = ["/", "/jobs", "/job/[jobId]"];

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const { pathname } = useRouter();

  const isPublicPage = publicPages.includes(pathname);

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
      <main className="light flex flex-col h-screen">
        <ClerkProvider>
          {isPublicPage ? (
            <>
              <Component {...pageProps} />
            </>
          ) : (
            <>
              <SignedIn>
                <Component {...pageProps} />
              </SignedIn>

              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          )}
        </ClerkProvider>
      </main>
    </>
  );
};

export default App;

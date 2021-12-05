import {
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import "@fontsource/nunito-sans";
import "@fontsource/plus-jakarta-sans";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Loading from "components/Loading";
import Meta from "components/Meta";
import "styles/globals.css";

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
          <ClerkLoading>
            <Loading />
          </ClerkLoading>
          <ClerkLoaded>
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
          </ClerkLoaded>
        </ClerkProvider>
      </main>
    </>
  );
};

export default App;

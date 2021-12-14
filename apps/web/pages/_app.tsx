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
import "../styles/globals.css";

const publicPages: string[] = ["/", "/job/[jobId]"];

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
      <style global jsx>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");

        @layer components {
          .button {
            @apply hover:bg-blue-600 px-8 py-3 font-bold text-white transition duration-300 bg-blue-500 rounded-lg shadow;
          }
        }

        .gradient {
          background: radial-gradient(
            at right center,
            rgb(56, 189, 248),
            rgb(49, 46, 129)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .heading {
          font-family: "Nunito Sans", sans-serif;
        }

        /*used to make images white*/
        .filter-white {
          filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(148deg)
            brightness(107%) contrast(101%);
        }
      `}</style>
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

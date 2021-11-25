import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "@fontsource/plus-jakarta-sans";
import { useRouter } from "next/router";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

const publicPages: string[] = ["/", "/jobs"];

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const { pathname } = useRouter();

  const isPublicPage = publicPages.includes(pathname);

  return (
    <>
      <NextSeo
        title="InternNova - Find internships, for highschoolers"
        description="Experience the world beyond the confines of a school wall! InternNova makes finding internships easy and accessible to high-school students all over the world."
        openGraph={{
          url: "https://www.internnova.co",
          title: "InternNova - Find internships, for highschoolers",
          description:
            "Experience the world beyond the confines of a school wall. InternNova makes finding internships easy and accessible to high-school students all over the world!",
          images: [
            {
              url: "/seo-image.png",
              width: 800,
              height: 420,
              alt: "Samrath",
            },
          ],
          site_name: "InternNova",
        }}
        twitter={{
          handle: "@InternNovaLabs",
          site: "https://www.internnova.co",
          cardType: "summary_large_image",
        }}
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

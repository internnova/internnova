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
import Loading from "components/Loading";
import Meta from "components/Meta";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import "../styles/globals.css";

const publicPages: string[] = ["/", "/job/[jobId]", "404"];

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

      <NextSeo
        title="InternNova - Find internships, for highschoolers"
        description="Experience the world beyond the confines of a school wall! InternNova makes finding internships easy and accessible to high-school students all over the world."
        canonical="https://internnova.co/"
        openGraph={{
          url: "https://internnova.co/",
          title: "InternNova - Find internships, for highschoolers",
          description:
            "Experience the world beyond the confines of a school wall! InternNova makes finding internships easy and accessible to high-school students all over the world.",
          images: [
            {
              url: "https://internnova.co/assets/img/twitter.png",
              alt: "InternNova - Find internships, for highschoolers",
              type: "image/png",
            },
          ],
          site_name: "InternNova",
        }}
        twitter={{
          handle: "@internnovahq",
          site: "@internnovahq",
          cardType: "summary_large_image",
        }}
      />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script
        strategy="lazyOnload"
        src={`src="https://cdn.splitbee.io/sb.js`}
      />

      <Script strategy="lazyOnload" id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>

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

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
import "../styles/globals.css";
import Script from "next/script";

const publicPages: string[] = ["/", "/job/[jobId]"];

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const { pathname } = useRouter();

  const isPublicPage = publicPages.includes(pathname);

  return (
    <>
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

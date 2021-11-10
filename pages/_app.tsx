import { Auth } from "@supabase/ui";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import { supabase } from "../lib/initSupabase";
import "../styles/globals.css";
import "@fontsource/plus-jakarta-sans";

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
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
      <main className="light">
        <Auth.UserContextProvider supabaseClient={supabase}>
          <Component {...pageProps} />
        </Auth.UserContextProvider>
      </main>
    </>
  );
};

export default App;

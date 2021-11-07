import { Auth } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";
import { AppProps } from "next/app";
import "../styles/globals.css";

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  return (
    <main className="dark">
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </main>
  );
};

export default App;

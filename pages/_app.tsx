import { AppProps } from "next/app";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  // You can optionally pass the `user` prop from pages that require server-side
  // rendering to prepopulate the `useUser` hook.
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default App;

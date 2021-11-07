import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";
import {
  Auth,
  Card,
  Typography,
  Space,
  Button,
  IconLogOut,
} from "@supabase/ui";
import { supabase } from "../lib/initSupabase";
import { useEffect, useState } from "react";
import SmallButton from "../components/SmallButton";

const fetcher = (url: string, token: string) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const Index = () => {
  const router = useRouter();

  const { user, session } = Auth.useUser();
  const { data, error } = useSWR(
    session ? ["/api/getUser", session.access_token] : null,
    fetcher
  );
  const [authView, setAuthView] = useState<
    | "sign_in"
    | "sign_up"
    | "forgotten_password"
    | "magic_link"
    | "update_password"
  >("sign_in");

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "PASSWORD_RECOVERY") setAuthView("update_password");
        if (event === "USER_UPDATED")
          setTimeout(() => setAuthView("sign_in"), 1000);
        // Send session to /api/auth route to set the auth cookie.
        // NOTE: this is only needed if you're doing SSR (getServerSideProps)!
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json());
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const View = () => {
    if (!user)
      return (
        <Space direction="vertical" size={8}>
          <div>
            <img
              src="https://www.internnova.co/assets/img/logo.png"
              alt=""
              width="96"
            />
            <Typography.Title level={3}>Welcome to InternNova</Typography.Title>
          </div>
          <Auth
            supabaseClient={supabase}
            providers={[]}
            view={authView}
            socialLayout="horizontal"
            socialButtonSize="xlarge"
          />
        </Space>
      );

    return (
      <>
        {authView === "update_password" && (
          <Space direction="vertical" size={6}>
            <Auth.UpdatePassword supabaseClient={supabase} />
          </Space>
        )}
        {user && <SuccessPage />}
      </>
    );
  };

  return <SuccessPage />;
};

const SuccessPage = () => (
  <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
    <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
      <div className="w-full md:w-1/2">
        <div className="mb-10 lg:mb-20">
          <img
            src="https://flipstore.withun.link/identity/Group%201.svg"
            alt=""
          />
        </div>
        <div className="mb-10 md:mb-20 text-gray-600 font-light">
          <h1 className="font-black text-3xl lg:text-5xl text-indigo-700 mb-10">
            You have successfully logged in
          </h1>
          <p className="text-gray-600">You can now access your account.</p>
          <div className="mt-5">
            <Link href="/" passHref>
              <a>
                <SmallButton content="Go Home" />
              </a>
            </Link>
          </div>
        </div>
        <div className="mb-20 md:mb-0">
          <a href="http://twitter.com/InternNovaLabs">
            <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-500 hover:text-blue-600">
              Reach out to us on twitter
            </button>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center">
        <img
          src="/assets/img/graphics/success-page.png"
          className="w-64 h-64"
          alt=""
        />
      </div>
    </div>
    <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
    <div className="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
  </div>
);

export default Index;

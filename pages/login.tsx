import Link from "next/link";
import useSWR from "swr";
import {
  Auth,
  Card,
  Typography,
  Space,
  Button,
  IconLogOut,
} from "@supabase/ui";
import { useRouter } from "next/router";
import { supabase } from "../lib/initSupabase";
import { useEffect, useState } from "react";

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
      <Space direction="vertical" size={6}>
        {authView === "update_password" && (
          <Auth.UpdatePassword supabaseClient={supabase} />
        )}
        {user && (
          <>
            {(() => {
              router.push("/");
              return <></>;
            })()}
            <h1 className="text-3xl text-blue-700">Loading...</h1>
          </>
        )}
      </Space>
    );
  };

  return (
    <div style={{ maxWidth: "420px", margin: "96px auto" }}>
      <Card>
        <View />
      </Card>
    </div>
  );
};

export default Index;

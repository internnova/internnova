import { Auth, Card, Space, Typography } from "@supabase/ui";
import { useRouter } from "next/router";
import { useState } from "react";
import { supabase } from "../lib/initSupabase";

const Index = () => {
  const router = useRouter();
  const { user } = Auth.useUser();
  /*eslint-disable-next-line*/
  const [authView, setAuthView] = useState<
    | "sign_in"
    | "sign_up"
    | "forgotten_password"
    | "magic_link"
    | "update_password"
  >("sign_in");

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

import { Card, Typography, Space, Button, IconLogOut } from "@supabase/ui";
import { SupabaseUser } from "../lib/SupabaseUser";
import { supabase } from "../lib/initSupabase";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export default function Profile({ user }: { user: SupabaseUser }) {
  const router = useRouter();
  return (
    <div style={{ maxWidth: "420px", margin: "96px auto" }}>
      <Card>
        <Space direction="vertical" size={6}>
          <Button
            /*eslint-disable*/
            icon={<IconLogOut />}
            type="outline"
            onClick={() => router.push("/api/signout")}
          >
            Log out
          </Button>
          <Typography.Text>You're signed in</Typography.Text>
          <Typography.Text strong>Email: {user.email}</Typography.Text>
          <Typography.Text>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </Typography.Text>
        </Space>
      </Card>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user } = await supabase.auth.api.getUserByCookie(ctx.req);

  if (!user) {
    // If no user, redirect to login.
    return { props: {}, redirect: { destination: "/login", permanent: false } };
  }

  // If there is a user, return it.
  return { props: { user } };
};

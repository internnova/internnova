import {
  Card,
  Typography,
  Space,
  Button,
  IconLogOut,
  Auth,
} from "@supabase/ui";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { user, session } = Auth.useUser();
  return (
    <div style={{ maxWidth: "420px", margin: "96px auto" }}>
      <Card>
        <Space direction="vertical" size={6}>
          <Button
            icon={<IconLogOut />}
            type="outline"
            onClick={() =>
              router.push(`/api/signout?token=${session?.access_token}`)
            }
          >
            Log out
          </Button>
          <Typography.Text>You{"'"}re signed in</Typography.Text>
          <Typography.Text strong>Email: {user?.email}</Typography.Text>
          <Typography.Text>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </Typography.Text>
        </Space>
      </Card>
    </div>
  );
};

export default Profile;

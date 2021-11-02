import React from "react";
import { UserProfile, withPageAuthRequired } from "@auth0/nextjs-auth0";

type ProfileProps = { user: UserProfile };

export default function Profile({ user }: ProfileProps): React.ReactElement {
  return (
    <>
      <h1>Profile</h1>

      <div>
        <h4>Profile (server rendered)</h4>
        <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();

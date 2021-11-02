import { UserProfile, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Landing } from "../components/HomePage/Unauthorized";

type IndexProps = { user: UserProfile };

const Index = ({ user }: IndexProps) => {
  return <Landing user={user} />;
};

export default Index;

export const getServerSideProps = withPageAuthRequired();

import { useUser } from "@auth0/nextjs-auth0";
import { Landing } from "../components/HomePage/Unauthorized";
import { Loading } from "../components/Loading";

const Index = () => {
  const { user, isLoading } = useUser();
  if (isLoading) return <Loading />;
  return <Landing user={user ? user : null} />;
};

export default Index;

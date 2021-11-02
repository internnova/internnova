import { useUser } from "@auth0/nextjs-auth0";
import { Landing } from "../components/HomePage/Unauthorized";

const Index = () => {
  const { user } = useUser();
  return <Landing user={user ? user : null} />;
};

export default Index;

import { Auth } from "@supabase/ui";
import { Landing } from "../components/HomePage/Unauthorized";

const Index = () => {
  const { user } = Auth.useUser();
  console.log(user);
  return <Landing user={user ? user : null} />;
};

export default Index;

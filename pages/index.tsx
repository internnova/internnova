import { Auth } from "@supabase/ui";
import InternHomepage from "../components/HomePage/Intern";
import { Landing } from "../components/HomePage/Unauthorized";

const Index = () => {
  const { user } = Auth.useUser();

  if (!user) {
    return <Landing user={user} />;
  } else {
    if (user) {
      return <InternHomepage user={user} />;
    }
  }
  return <></>;
};

export default Index;

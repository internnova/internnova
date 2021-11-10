import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/initSupabase";

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  supabase.auth.signOut();
  res.writeHead(302, {
    Location: "/",
  });
  res.end();
  return;
};

export default auth;

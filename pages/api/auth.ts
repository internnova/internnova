import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/initSupabase";

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  supabase.auth.api.setAuthCookie(req, res);
};

export default auth;

import { supabase } from "../../lib/initSupabase";
import type { NextApiRequest, NextApiResponse } from "next";

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  supabase.auth.api.setAuthCookie(req, res);
};

export default auth;

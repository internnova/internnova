import { supabase } from "../../lib/initSupabase";
import type { NextApiRequest, NextApiResponse } from "next";

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.token;

  const { data: user, error } = await supabase.auth.api.getUser(
    token as string
  );

  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json(user);
};

export default getUser;

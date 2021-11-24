import { User } from "@supabase/supabase-js";

// this is a dummy pointing to the User type, it is named SupabaseUser to avoid a conflict with the User type
// from "@prisma/client", aaaaaaaah is required to make typescript happy
export interface SupabaseUser extends User {
  aaaaaaaah?: null;
}

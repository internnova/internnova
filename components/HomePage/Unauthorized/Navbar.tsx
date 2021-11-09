import Link from "next/link";
import SmallButton from "../../SmallButton";
import { SupabaseUser } from "../../../lib/SupabaseUser";
import { supabase } from "../../../lib/initSupabase";

type ProfileProps = { user: SupabaseUser | null };

export default function Navbar({ user }: ProfileProps) {
  if (!user) {
    return (
      <header className="flex items-center justify-between pt-5">
        <div className="flex items-center justify-between space-x-8 font-medium">
          <a href="#0" className="">
            <img
              src="/assets/img/logo_text.png"
              alt=""
              className="max-w-[200px]"
            />
          </a>
          <div className="hidden md:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#HowItWorks"
                className="px-3 py-2 font-extrabold text-blue-500 hover:underline"
              >
                How it Works
              </a>

              <a
                href="#FAQs"
                className="px-3 py-2 font-extrabold text-blue-500 hover:underline"
              >
                FAQs
              </a>

              <a
                href="#ContactUs"
                className="px-3 py-2 font-extrabold text-blue-500 hover:underline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between font-medium lg:block">
          <Link href="/login" passHref>
            <a>
              <SmallButton content="Login" />
            </a>
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header className="flex items-center justify-between pt-5">
        <div className="flex items-center justify-between space-x-8 font-medium">
          <a href="#0" className="">
            <img
              src="/assets/img/logo_text.png"
              alt=""
              className="max-w-[200px]"
            />
          </a>
        </div>

        <div className="flex items-center justify-between font-medium lg:block">
          <SmallButton
            content="Logout"
            onClick={() => supabase.auth.signOut()}
          />
        </div>
      </header>
    );
  }
}

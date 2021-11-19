import Link from "next/link";
import { SupabaseUser } from "../../../lib/SupabaseUser";
import SmallButton from "../../SmallButton";
import { supabase } from "../../../lib/initSupabase";

type ProfileProps = { user: SupabaseUser | null };

export default function Navbar(props: ProfileProps) {
  if (!props.user) {
    return (
      <header className="flex items-center justify-between pt-5">
        <div className="flex items-center justify-between space-x-8 font-medium">
          <div className="md:block hidden">
            <div className="flex space-x-4">
              <div className="flex flex-row items-center pb-[5px]">
                <img
                  src="/assets/img/logo-transparent.png"
                  alt="logo"
                  className="w-12 mr-2 mt-1"
                />
                <a
                  className="md:text-2xl hover:text-gray-700 text-xl font-bold text-gray-800 pb-1"
                  href="#"
                >
                  InternNova
                </a>
              </div>
              <div className="pt-4">
                <a
                  href="#HowItWorks"
                  className="hover:underline px-3 py-2 font-extrabold text-blue-500"
                >
                  How it Works
                </a>

                <a
                  href="#FAQs"
                  className="hover:underline px-3 py-2 font-extrabold text-blue-500"
                >
                  FAQs
                </a>

                <a
                  href="#ContactUs"
                  className="hover:underline px-3 py-2 font-extrabold text-blue-500"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block flex items-center justify-between font-medium">
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

        <div className="lg:block flex items-center justify-between font-medium">
          <SmallButton
            content="Logout"
            onClick={() => supabase.auth.signOut()}
          />
        </div>
      </header>
    );
  }
}

import Link from "next/link";
import SmallButton from "../../SmallButton";
import { SupabaseUser } from "../../../lib/SupabaseUser";
import { useRouter } from "next/router";

type ProfileProps = { user: SupabaseUser | null };

export default function Navbar({ user }: ProfileProps) {
  const router = useRouter();

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
          <div className="md:block sm:ml-6 hidden">
            <div className="flex space-x-4">
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
            onClick={() => router.push("/api/signOut")}
          />
        </div>
      </header>
    );
  }
}

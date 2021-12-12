import Link from "next/link";
import SmallButton from "../../SmallButton";

type NavbarProps = {
  notHomepage?: boolean;
};

export default function Navbar(props: NavbarProps) {
  return (
    <div className="glassmorphism-50 w-full px-6 md:px-20 sticky top-0 z-50">
      <header className="flex w-full items-center justify-between pt-3">
        <div className="flex items-center justify-between space-x-8 font-medium">
          <div className="flex flex-row items-center pb-[5px]">
            <a href="#">
              <img
                src="/assets/img/logo-transparent.png"
                alt="logo"
                className="w-14 mr-2 mt-0.5 mb-2"
              />
            </a>
          </div>
        </div>
        <div className="pb-6">
          {!props.notHomepage && (
            <div>
              <div className="md:block hidden pt-4">
                <a
                  href="#HowItWorks"
                  className="hover:underline px-6 py-2 tracking-wide text-gray-500 active:text-blue-700"
                >
                  How It Works
                </a>

                <a
                  href="#FAQs"
                  className="hover:underline px-6 py-2 tracking-wide text-gray-500 active:text-blue-700"
                >
                  FAQs
                </a>

                <a
                  href="#ContactUs"
                  className="hover:underline px-6 py-2 tracking-wide text-gray-500 active:text-blue-700"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="lg:block flex items-center justify-between font-medium mb-2">
          <Link href="/login" passHref>
            <a>
              <SmallButton content="Login" />
            </a>
          </Link>
        </div>
      </header>
    </div>
  );
}

import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="glassmorphism-50 w-full sticky top-0 z-50">
      <nav className="shadow">
        <div className="md:flex md:justify-between md:items-center container px-6 py-3 mx-auto">
          <div className="flex items-center justify-between">
            <img
              src="/assets/img/logo-transparent.png"
              alt="logo"
              className="w-12 mr-2 mt-0.5"
            />
            {/* Mobile menu button */}
            <div className="md:hidden flex">
              <div className="mx-5">
                <UserButton />
              </div>
              <button
                type="button"
                className="hover:text-gray-600 focus:outline-none focus:text-gray-600 text-gray-500 mb-1"
                aria-label="toggle menu"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <span className="sr-only">Open main menu</span>

                {!open ? (
                  <>
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      className="block h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x2="24" y2="24" />
                      <line x1="24" y2="24" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
          <SignedIn>
            <div
              className={`md:flex items-center ${!open && "hidden md:block"}`}
            >
              <div className="md:flex-row md:mx-6 flex flex-col">
                <Link href="/jobs">
                  <a className="hover:text-blue-500 md:mx-4 md:my-0 my-1 text-gray-700">
                    Jobs
                  </a>
                </Link>
                <Link href="/applications">
                  <a className="hover:text-blue-500 md:mx-4 md:my-0 my-1 text-gray-700">
                    Applications
                  </a>
                </Link>
              </div>
              <div className="hidden md:block pt-1">
                <UserButton />
              </div>
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

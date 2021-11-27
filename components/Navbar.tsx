import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="glassmorphism-50 w-full sticky top-0 z-50">
      <nav className="shadow">
        <div className="md:flex md:justify-between md:items-center container px-6 py-3 mx-auto">
          <div className="flex items-center justify-between">
            <img
              src="/assets/img/logo.png"
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
                className="hover:text-gray-600 focus:outline-none focus:text-gray-600 text-gray-500"
                aria-label="toggle menu"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <SignedIn>
            <div
              className={`md:flex items-center ${!open && "hidden md:block"}`}
            >
              <div className="md:flex-row md:mx-6 flex flex-col">
                <a
                  className="hover:text-blue-500 md:mx-4 md:my-0 my-1 text-gray-700"
                  href="#"
                >
                  Jobs
                </a>
                <a
                  className="hover:text-blue-500 md:mx-4 md:my-0 my-1 text-gray-700"
                  href="#"
                >
                  Applications
                </a>
              </div>
              <div className={open ? "hidden" : ""}>
                <UserButton />
              </div>
            </div>
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

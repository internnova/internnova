import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      <nav className="bg-white shadow">
        <div className="md:flex md:justify-between md:items-center container px-6 py-3 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <a
                className="md:text-2xl hover:text-gray-700 text-xl font-bold text-gray-800"
                href="#"
              >
                InternNova
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex">
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
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className={`md:flex items-center ${!open && "hidden md:block"}`}>
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
              <button
                className="hover:text-blue-500 md:mx-4 md:my-0 my-1 text-gray-700"
                onClick={() => router.push("/api/signOut")}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="dark:bg-gray-800 bg-white shadow">
        <div className="md:flex md:justify-between md:items-center container px-6 py-3 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <a
                className="dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 text-xl font-bold text-gray-800"
                href="#"
              >
                InternNova
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex">
              <button
                type="button"
                className="dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 text-gray-500"
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
                className="dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 my-1 text-gray-700"
                href="#"
              >
                Jobs
              </a>
              <a
                className="dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 my-1 text-gray-700"
                href="#"
              >
                Applications
              </a>
              <a
                className="dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 my-1 text-gray-700"
                href="#"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

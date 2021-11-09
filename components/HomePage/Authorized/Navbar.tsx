export const Navbar = () => (
  <div>
    <nav className="dark:bg-gray-800 bg-white shadow">
      <div className="md:flex md:justify-between md:items-center container px-6 py-3 mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 text-xl font-bold text-gray-800"
              href="#"
            >
              Brand
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <button
              type="button"
              className="dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 text-gray-500"
              aria-label="toggle menu"
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
        <div className="md:flex items-center">
          <div className="md:flex-row md:mx-6 flex flex-col">
            <a
              className="dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 my-1 text-gray-700"
              href="#"
            >
              Home
            </a>
            <a
              className="dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 my-1 text-gray-700"
              href="#"
            >
              Shop
            </a>
            <a
              className="dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 my-1 text-gray-700"
              href="#"
            >
              Contact
            </a>
            <a
              className="dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 my-1 text-gray-700"
              href="#"
            >
              About
            </a>
          </div>
          <div className="md:block flex justify-center">
            <a
              className="hover:text-gray-600 dark:hover:text-gray-300 dark:text-gray-200 relative text-gray-700"
              href="#"
            >
              <i className="fas fa-shopping-cart" />
              <span className=" absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div className="h-96 rounded-xl container w-full p-20 m-4 mx-auto my-16 text-center bg-white border-2 border-gray-300 border-dashed">
      <p className="text-md mt-20 italic text-gray-500">
        -- Content of your page --
      </p>
    </div>
  </div>
);

const Four04 = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-4 lg:py-12">
        <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
          <h1 className="font-bold text-gray-500 text-9xl pb-5">404</h1>
          <p className="mb-2 text-3xl font-bold text-center text-gray-700 md:text-4xl pb-3">
            <span className="text-red-500">Oops!</span> Page not found
          </p>
          <p className="mb-6 text-xl text-center text-gray-500 md:text-2xl">
            🔎 A ninja stole this page. 🥷
          </p>
          {/*eslint-disable-next-line*/}
          <a
            href="/"
            className="px-6 py-2 text-xl font-semibold text-blue-700 bg-blue-200"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Four04;

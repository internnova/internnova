import SmallButton from "../../SmallButton";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center pt-5">
      <div className="space-x-8 font-medium flex justify-between items-center">
        <a href="#0" className="">
          <img
            src="/assets/img/logo_text.png"
            alt=""
            className="max-w-[200px]"
          />
        </a>
        {/* Hehe nice */}
        <div className="hidden sm:block sm:ml-6 pb-[6.9px]">
          <div className="flex space-x-4">
            <a
              href="#HowItWorks"
              className="text-blue-500 px-3 py-2 hover:underline font-extrabold"
            >
              How it Works
            </a>

            <a
              href="#FAQs"
              className="text-blue-500 px-3 py-2 hover:underline font-extrabold"
            >
              FAQs
            </a>

            <a
              href="#"
              className="text-blue-500 px-3 py-2 hover:underline font-extrabold"
              id="ContactUs"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="hidden space-x-8 font-medium lg:block"></div>
      <div className="hidden font-medium lg:block flex justify-between items-center">
        <SmallButton content="Login" />
      </div>
    </header>
  );
}

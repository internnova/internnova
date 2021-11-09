import { useState } from "react";
import SmallButton from "../../SmallButton";

export default function ContactUs() {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <section
      className="pb-7 lg:pt-16 xl:pt-28 pt-12 bg-gray-100"
      id="ContactUs"
    >
      <div className="container px-5 mx-auto">
        <div className="lg:gap-10 xl:grid-cols-3 mb-7 lg:mb-14 grid gap-6">
          <div className="xl:space-y-0 flex flex-col justify-between space-y-10">
            <div className="lg:space-y-4 space-y-2">
              <h2 className="sm:text-3xl text-2xl font-black">Contact us</h2>
              <a
                href="#0"
                className="duration200 hover:text-blue-600 md:text-lg block text-blue-500 transition"
              >
                +91 96062 14954
              </a>
              <a
                href="mailto:InternNova@outlook.com"
                className="hover:text-blue-600 md:text-lg block text-blue-500 transition duration-200"
              >
                internnova@outlook.com
              </a>
              <a
                href="#0"
                className="hover:text-blue-600 md:text-lg block text-blue-500 transition duration-200"
              >
                @InternNovaLabs
              </a>
            </div>
          </div>
          <div className="xl:col-span-2">
            <form className="rounded-xl md:p-8 w-full p-5 bg-white shadow">
              <input type="hidden" name="remember" value="true" />
              <div className="flex flex-col space-y-5">
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="
                      w-full
                      px-6
                      py-3.5
                      rounded-lg
                      border border-gray-200
                      shadow-sm
                      appearance-none
                      focus:outline-none focus:ring focus:border-blue-400
                      md:text-lg
                    "
                  placeholder="Title"
                />
                <textarea
                  name="message"
                  id="message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                  cols={30}
                  rows={8}
                  className="
                      w-full
                      px-6
                      py-3.5
                      rounded-lg
                      border border-gray-200
                      shadow-sm
                      appearance-none
                      resize-none
                      focus:outline-none focus:ring focus:border-blue-400
                      md:text-lg
                    "
                  placeholder="Message"
                ></textarea>
                <div>
                  <a
                    href={
                      "mailto:InternNova@outlook.com?subject=" +
                      title +
                      "&body=" +
                      message
                    }
                  >
                    <SmallButton content="Send message" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="mb-7 lg:mb-8 border-t border-gray-200"></div>

        <footer
          className="
              flex flex-col
              justify-between
              space-y-1.5
              text-gray-500 text-sm text-center
              sm:flex-row sm:space-y-0 sm:text-justify
            "
        >
          <p>Copyright © 2021 InternNova.</p>
          <p>
            Images from
            <a
              className="text-blue-500"
              href="https://unsplash.com"
              rel="noreferrer"
              target="_blank"
            >
              {" unsplash.com "}
            </a>
            and
            <a
              className="text-blue-500"
              href="https://www.freepik.com/vectors/background"
            >
              {" freepik.com"}
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}

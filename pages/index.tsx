import Head from "next/head";
import React from "react";
import HowItWorks from "../components/HomePage/Unauthorized/HowItWorks";
import Navbar from "../components/HomePage/Unauthorized/Navbar";
import ContactUs from "../components/HomePage/Unauthorized/ContactUs";
import FAQs from "../components/HomePage/Unauthorized/FAQs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>InternNova</title>
      </Head>
      <div className="font-sans antialiased bg-gray-50 text-gray-900">
        <main>
          <div
            className="bg-cover bg-no-repeat bg-right-top xl:bg-bottom"
            style={{ backgroundImage: "url('/assets/img/bg.jpg')" }}
          >
            <div className="container mx-auto px-5 pb-16 sm:pb-16 lg:pb-24 xl:pb-32">
              <Navbar />
              <div className="mt-16 space-y-8 lg:mt-24 xl:mt-28">
                <div className="space-y-4">
                  <h1
                    className="
                  text-3xl
                  font-black
                  sm:w-2/3 sm:text-4xl
                  md:max-w-xl md:text-5xl
                "
                  >
                    Experience the world beyond the confines of a school wall
                  </h1>
                  <p className="max-w-sm text-lg text-gray-700 md:max-w-md md:text-xl">
                    InternNova makes finding internships easy and accessible to
                    high-school students all over the world!
                  </p>
                </div>
                <a href="#HowItWorks">
                  <button
                    className="
                    px-8
                    py-6
                    transition
                    duration-300
                    bg-blue-500
                    hover:bg-blue-600
                    shadow
                    text-white
                    font-extrabold
                    rounded-lg
                  "
                  >
                    See how it works
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          <HowItWorks />

          <div className="border-t border-gray-200"></div>

          <FAQs />

          <div className="border-t border-gray-200"></div>

          <ContactUs />
        </main>
      </div>
    </div>
  );
}

// this code in this folder is dumpster fire, desperate need to refactor
import Head from "next/head";
import React from "react";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";
import Footer from "../../Footer";

export const Landing = () => {
  return (
    <div>
      <Head>
        <title>InternNova</title>
      </Head>
      <div className="antialiased text-gray-900">
        <main>
          <Navbar />
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Section header */}
              <div className="text-center pb-12 md:pb-16">
                <h1 className="text-5xl md:text-6xl leading-tighter tracking-tighter mb-4 heading">
                  Experience the world <span className="gradient">beyond </span>
                  a classroom
                </h1>
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-600 mb-8">
                    InternNova makes finding internships easy and accessible to
                    high-school students all over the world!
                  </p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"></div>
                </div>
              </div>

              {/* Hero image */}
              <div>
                <div
                  className="relative flex justify-center mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div className="flex flex-col justify-center">
                    <img
                      className="mx-auto shadow-2xl rounded-3xl"
                      src="/assets/img/preview.png"
                      width="768"
                      height="432"
                      alt="Hero"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700"></div>

          <HowItWorks />

          <div className="border-t border-gray-200"></div>

          <FAQs />

          <div className="border-t border-gray-200"></div>

          <ContactUs />
          <Footer />
        </main>
      </div>
    </div>
  );
};

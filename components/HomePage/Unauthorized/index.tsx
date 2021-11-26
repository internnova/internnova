// this code in this folder is dumpster fire, desperate need to refactor
import Head from "next/head";
import React from "react";
import SmallButton from "../../SmallButton";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";

export const Landing = () => {
  return (
    <div>
      <Head>
        <title>InternNova</title>
      </Head>
      <div className="antialiased text-gray-900">
        <main>
          <Navbar />
          <div className="bg-right-topm bg-no-repeat">
            <div className="flex flex-row item-center justify-between">
              <div className="relative sm:pb-16 lg:pb-24 xl:pb-32 container px-5 pb-16 mx-auto">
                <div className="lg:mt-24 xl:mt-28 mt-16 space-y-8">
                  <div className="space-y-4">
                    <h1 className="sm:w-2/3 sm:text-4xl md:max-w-xl md:text-5xl heading pb-2 text-3xl font-black text-gray-800">
                      Experience the world beyond the confines of a school wall
                    </h1>
                    <p className="md:max-w-md md:text-xl text-grey-900 max-w-sm pb-5 text-lg font-semibold text-gray-400">
                      InternNova makes finding internships easy and accessible
                      to high-school students all over the world!
                    </p>
                  </div>
                  <a href="#HowItWorks">
                    <SmallButton content="See How It Works" />
                  </a>
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
        </main>
      </div>
    </div>
  );
};

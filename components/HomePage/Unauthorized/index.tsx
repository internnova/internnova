import { SupabaseUser } from "../../../lib/SupabaseUser";
import Head from "next/head";
import React from "react";
import SmallButton from "../../SmallButton";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";

type LandingProps = { user: SupabaseUser | null };

export const Landing = (props: LandingProps) => {
  return (
    <div>
      <Head>
        <title>InternNova</title>
      </Head>
      <div className="bg-gray-50 antialiased text-gray-900">
        <main>
          <div
            className="bg-right-topm bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/assets/img/bg.jpg')" }}
          >
            <div className="sm:pb-16 lg:pb-24 xl:pb-32 container px-5 pb-16 mx-auto">
              <Navbar user={props.user} />
              <div className="lg:mt-24 xl:mt-28 mt-16 space-y-8">
                <div className="space-y-4">
                  <h1 className="sm:w-2/3 sm:text-4xl md:max-w-xl md:text-5xl font-fancy pb-2 text-3xl font-black">
                    Experience the world beyond the confines of a school wall
                  </h1>
                  <p className="md:max-w-md md:text-xl text-grey-900 max-w-sm pb-5 text-lg font-semibold text-gray-700">
                    InternNova makes finding internships easy and accessible to
                    high-school students all over the world!
                  </p>
                </div>
                <a href="#HowItWorks">
                  <SmallButton content="See How It Works" />
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
};

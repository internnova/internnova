import { SupabaseUser } from "../../../lib/SupabaseUser";
import Head from "next/head";
import React from "react";
import SmallButton from "../../SmallButton";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";

type LandingProps = { user: SupabaseUser | null };

export const Landing = ({ user }: LandingProps) => {
  return (
    <div>
      <Head>
        <title>InternNova</title>
      </Head>
      <div className="font-sans antialiased text-gray-900 bg-gray-50">
        <main>
          <div
            className="bg-no-repeat bg-cover bg-right-topm"
            style={{ backgroundImage: "url('/assets/img/bg.jpg')" }}
          >
            <div className="container px-5 pb-16 mx-auto sm:pb-16 lg:pb-24 xl:pb-32">
              <Navbar user={user} />
              <div className="mt-16 space-y-8 lg:mt-24 xl:mt-28">
                <div className="space-y-4">
                  <h1 className="pb-2 text-3xl font-black sm:w-2/3 sm:text-4xl md:max-w-xl md:text-5xl font-fancy">
                    Experience the world beyond the confines of a school wall
                  </h1>
                  <p className="max-w-sm pb-5 text-lg font-semibold text-gray-700 md:max-w-md md:text-xl text-grey-900">
                    InternNova makes finding internships easy and accessible to
                    high-school students all over the world!
                  </p>
                </div>
                <a href="#HowItWorks">
                  <SmallButton content="See How It works" />
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

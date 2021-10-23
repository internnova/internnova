import React from "react";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | InternNova</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-8">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r to-green-500 from-green-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h1 className="font-extrabold text-4xl text-center mb-2">
                    Login
                  </h1>
                  <p className="text-center">
                    Land the best possible, high-school ready internships
                  </p>
                  <div className="justify-center flex flex-col py-6 sm-py-12">
                    <input
                      placeholder="Email"
                      type="email"
                      className="form-control mb-2"
                    />
                    <input
                      placeholder="Password"
                      type="password"
                      className="form-control"
                    />
                    <div className="mt-4">
                      <label>
                        <input type="checkbox" className="intnv-chk" />
                        <span className="pl-2 pt-3">Remember me</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p className="text-center">
                    <button className="btn">Login</button>
                  </p>
                  <p className="text-center font-normal mt-[5px]">
                    No account?{" "}
                    <a href="#" className="text-green-500 hover:text-green-600">
                      Create one!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

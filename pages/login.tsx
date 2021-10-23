import React from "react"; 
import Head from "next/head"

export default function Login() {
    return (
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-8">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
       <div class="absolute inset-0 bg-gradient-to-r to-green-500 from-green-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
       <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
             <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h1 style="margin-bottom:5px;" class="font-extrabold text-4xl text-center">Login</h1>
                   <p class="text-center">Land the best possible, high-school ready internships</p>
                   <div class="justify-center flex flex-col py-6 sm-py-12">
                    <input style="margin-bottom: 10px;" placeholder="Email" type="email" class="form-control">
                    <input placeholder="Password" type="password" class="form-control">
                    <div style="margin-top:10px;">
                    <label>
                        <input type="checkbox" style="margin-bottom:15px;" class="intnv-chk">
                        <span>Remember me</span>
                    </label>
                </div>
                </div>
                </div>
                <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                    <p class="text-center"> 
                        <button class="btn">Login</button>
                   </p>
                   <p style="margin-top:5px;" class="text-center font-normal">No account? <a href="#" class="text-green-500 hover:text-green-600">Create one!</a></p>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
    );
}
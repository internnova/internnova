import React, { useState } from "react"
import Navbar from "components/Navbar"

function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
        <Navbar />
        <div className="pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-variant-2">
              Congratulations! Your Application has been submitted
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8">
                The company will now review the application and get back to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHome

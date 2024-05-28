import React from "react";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-3xl sm:text-center">
          <h2 className="mb-6 font-bold tracking-tight text-white text-5xl sm:leading-none">
            <br className="hidden md:block" />
            Testing and{" "}
            <span className="relative inline-block">
              Quality Assurance{" "}
              <div className="w-full h-3 -mt-3 bg-deep-purple-accent-400" />
            </span>
          </h2>
          <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
            We transform software testing and quality assurance through a
            customized approach that blends cutting-edge innovation with deep
            expertise. Driven by a commitment to excellence, we rigorously
            evaluate, enhance, and perfect your software to ensure unmatched
            robustness, security, and performance. Rely on us to take your
            software to new levels of dependability and user satisfaction,
            equipping your business for success in the fast-paced digital world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

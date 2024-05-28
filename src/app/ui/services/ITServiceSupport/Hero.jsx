import Link from "next/link";
import React from "react";
import { RiCustomerServiceFill } from "react-icons/ri";
import { CgTime } from "react-icons/cg";
import { BsQuestionSquareFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="mb-16">
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 pt-16">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto ">
              <span className="relative inline-block">
                <span className="relative">Welcome</span>
              </span>{" "}
              To IT Service Support
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              We provide reliable IT Service Support to keep your business
              running smoothly. Our services ensure minimal downtime, quick
              issue resolution, and optimal IT performance, allowing you to
              focus on core activities and enhance productivity.
            </p>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center  mx-auto mb-4">
              <RiCustomerServiceFill className="w-12 h-12" />
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Customer Support
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center  mx-auto mb-4 ">
              <CgTime className="w-12 h-12" />
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Support 24/7
            </p>
          </div>
          <div className="inline-block p-10 text-center">
            <div className="flex items-center justify-center mx-auto mb-4 ">
              <BsQuestionSquareFill className="w-10 h-10 " />
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Future Queries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

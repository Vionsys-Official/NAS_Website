"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="flex flex-col gap-4 text-center overflow-x-hidden w-[80%]">
        <h6 className="md:text-HMain text-HMain-sm font-bold text-blue2">
          Why choose us ???
        </h6>

        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div className="flex md:contents flex-row-reverse">
            <motion.div
              variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}
              className="my-2 md:my-0 relative p-4 text-gray-800 bg-blue7 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
            >
              <h3 className="md:text-CardHeading text-CardHeading-sm font-semibold lg:text-xl">
                Industry Expertise
              </h3>
              <p className="mt-2 md:text-Para text-Para-sm leading-6">
                With years of experience in the insurance sector, we understand
                the specific needs and challenges you face.
              </p>
            </motion.div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-red-300 rounded-t-full bg-gradient-to-b from- to-red-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-blue7 border-4 border-red-500 rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-red-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3   bg-blue7 border-4 border-red-500 rounded-full top-1/2"></div>
            </div>
            <motion.div
              variants={fadein("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}
              className="my-2 md:my-0 relative p-4 text-gray-800  bg-blue7 rounded-xl col-start-6 col-end-10 mr-auto"
            >
              <h3 className="my-2 md:my-0 md:text-CardHeading text-CardHeading-sm font-semibold lg:text-xl">
                Innovative Technology
              </h3>
              <p className="mt-2 md:text-Para text-Para-sm leading-6">
                Our solutions are built using the latest technologies to ensure
                you stay ahead of the competition.
              </p>
            </motion.div>
          </div>

          <div className="flex md:contents flex-row-reverse">
            <motion.div
              variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}
              className="relative p-4 text-gray-800  bg-blue7 border-red-500 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
            >
              <h3 className="md:text-CardHeading text-CardHeading-sm font-semibold lg:text-xl">
                Customer-Centric Approach
              </h3>
              <p className="mt-2 md:text-Para text-Para-sm leading-6">
                We prioritize your success and work closely with you to deliver
                customized solutions that drive results.
              </p>
            </motion.div>
            <div className="my-2 md:my-0 relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-red-300 rounded-t-full bg-gradient-to-b from-red-400 to-red-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3  bg-blue7 border-4 border-red-500 rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-red-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3  bg-blue7 border-4 border-red-500 rounded-full top-1/2"></div>
            </div>
            <motion.div
              variants={fadein("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}
              className="my-2 md:my-0 relative p-4 text-gray-800  bg-blue7 rounded-xl col-start-6 col-end-10 mr-auto"
            >
              <h3 className="md:text-CardHeading text-CardHeading-sm font-semibold lg:text-xl">
                Exceptional Support
              </h3>
              <p className="mt-2 md:text-Para text-Para-sm leading-6">
                Our dedicated support team is always available to assist you,
                ensuring a smooth and hassle-free experience.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

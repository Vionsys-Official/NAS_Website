"use client";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import React from "react";
import { RiCustomerServiceFill } from "react-icons/ri";
import { CgTime } from "react-icons/cg";
import { BsQuestionSquareFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="md:pb-16 pb-5 bg-blue1 bg-opacity-70 rounded-b-[40%]">
      <div className="">
        <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <motion.div  
            initial={{ opacity: 0, scale: 1.1 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.8 }}
          className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl pt-16">
            <h2
              className="max-w-lg mb-6 font-bold leading-none tracking-tight text-gray-900 md:text-5xl text-HMain-sm md:mx-auto "
            >
              <span className="relative inline-block">
                <span className="relative text-blue-950 cursor-pointer">Welcome To IT Service Support</span>
              </span>{" "}
            </h2>
            <p className="text-blue-950 md:text-Para text-Para-sm md:text-lg cursor-pointer">
              We provide reliable IT Service Support to keep your business
              running smoothly. Our services ensure minimal downtime, quick
              issue resolution, and optimal IT performance, allowing you to
              focus on core activities and enhance productivity.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0  h-1/2" />
        <motion.div 
        initial={{ opacity: 0, scale: 1.1 }} //X:100
        whileInView={{ opacity: 1, scale: 1 }} //y:100
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block md:p-8 p-4 text-center hover:bg-green1 hover:bg-opacity-50 cursor-pointer">
            <div className="flex items-center justify-center  mx-auto mb-4">
              <RiCustomerServiceFill className="w-12 h-12" />
            </div>
            <p className="font-semibold tracking-wide text-gray-800">
              Customer Support
            </p>
          </div>
          <div className="inline-block md:p-8 p-4 text-center hover:bg-green1 hover:bg-opacity-50 cursor-pointer">
            <div className="flex items-center justify-center  mx-auto mb-4 ">
              <CgTime className="w-12 h-12" />
            </div>
            <p className="font-semibold tracking-wide text-gray-800">
              Support 24/7
            </p>
          </div>
          <div className="inline-block md:p-8 p-4 text-center hover:bg-green1 hover:bg-opacity-50 cursor-pointer">
            <div className="flex items-center justify-center mx-auto mb-4 ">
              <BsQuestionSquareFill className="w-10 h-10 " />
            </div>
            <p className="font-semibold tracking-wide text-gray-800">
              Future Queries
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

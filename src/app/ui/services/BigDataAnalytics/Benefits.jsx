"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

import DataScience from "/public/assets/services/BigDataAnalytics/data_science.png";
import Image from "next/image";
const Benefits = () => {
  return (
    <div className="w-full flex md:flex-row flex-col md:px-0 px-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }} //X:100
        whileInView={{ opacity: 1, scale: 1 }} //y:100
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="md:w-[50%] w-full h-[50%]"
      >
        <Image src={DataScience} alt="" className="w-full h-[80%]" />
      </motion.div>
      <div className="md:w-[50%] w-full">
        <div className="md:w-2/3 w-full md:pl-10 pt-10">
          <div className="pl-6">
            <h1 className="md:text-Heading text-Heading-sm font-bold text-blue950 ">
              Who benefits from implementing Big Data?
            </h1>
          </div>
          <motion.div
            variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }} className="w-full pl-6 flex flex-col gap-4 py-6">
            <div className="flex flex-row gap-2">
              <h1 className="pt-1">
                <GoDotFill className="w-4 h-4" />
              </h1>
              <p className="md:text-base text-sm text-gray-800 ">
                Companies that strive to broaden their customer’s list, thus,
                so they can produce precisely targeted products.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <h1 className="pt-1">
                <GoDotFill className="w-4 h-4" />
              </h1>
              <p className="md:text-base text-sm  text-gray-800">
                Healthcare and financial companies that require solutions to
                prevent potential business risks thoroughly analyze the
                behavior of their customers and investigate their operational
                activities.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <h1 className="pt-1">
                <GoDotFill className="w-4 h-4" />
              </h1>
              <p className="md:text-base text-sm text-gray-800">
                Business that need to update their existed data-driven
                solutions.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <h1 className="pt-1">
                <GoDotFill className="w-4 h-4" />
              </h1>
              <p className="md:text-base text-sm text-gray-800 ">
                Retailers and e-commerce analyze real-time data to personalize
                experiences and optimize inventory.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <h1 className="pt-1">
                <GoDotFill className="w-4 h-4" />
              </h1>
              <p className="md:text-base text-sm text-gray-800 ">
                Manufacturing and logistics use Big Data to streamline supply
                chains, predict maintenance and optimize production.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

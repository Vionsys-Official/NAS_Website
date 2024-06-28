"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import section3Image from "/public/assets/services/salesforce/section3Image.jpg";
import { MdOutlineVerified } from "react-icons/md";

const salesforcesec3 = () => {
  return (
    <section>
      <motion.div
        variants={fadein("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        className="text-center md:mb-6 mb-3 md:text-Heading text-Heading-sm font-extrabold leading-none tracking-tight text-blue2"
      >
        Why Choose Us?
      </motion.div>
      <div className="flex flex-col px-6 md:py-5 mx-auto items-center lg:h-[20rem] lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="lg:max-w-lg">
            <motion.div
              variants={fadein("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}
            >
              <h1 className="md:text-SubHeading text-SubHeading-sm font-semibold tracking-wide text-gray-800 dark:text-white text-center">
                Comprehensive Services for Your Salesforce Needs
              </h1>
              <p className="mt-4 text-gray-600 text-center dark:text-gray-300">
                Experience seamless Salesforce integration and expert support
                from our dedicated team ensuring your business thrives with
                streamlined implementation and strategic consulting services.
              </p>
            </motion.div>
            <motion.div
              variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}
              className="grid gap-6 mt-8 sm:grid-cols-2"
            >
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <MdOutlineVerified className="text-SubHeading-sm" />
                <span className="mx-3">Salesforce Integration</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <MdOutlineVerified className="text-SubHeading-sm" />
                <span className="mx-3">Salesforce Support</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <MdOutlineVerified className="text-SubHeading-sm" />
                <span className="mx-3">Salesforce Implementation</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <MdOutlineVerified className="text-SubHeading-sm" />
                <span className="mx-3">Salesforce Consulting</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            className="object-cover rounded-md shadow-lg"
            width={500}
            height={500}
            src={section3Image}
            alt="glasses photo"
          />
        </div>
      </div>
    </section>
  );
};

export default salesforcesec3;

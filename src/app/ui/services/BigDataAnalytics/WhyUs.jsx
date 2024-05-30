"use client";
import Image from "next/image";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import Why from "/public/assets/services/BigDataAnalytics/Why.png";
import { FaCheckCircle } from "react-icons/fa";
const WhyUs = () => {
  return (
    <div className="w-full flex md:flex-row flex-col md:py-5 py-0">
      <div className="md:w-[50%] w-full">
        <div className="md:px-7 px-2">
          <div className="py-10 flex flex-col md:gap-9 gap-4">
            <motion.div
              variants={fadein("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className=" w-full md:text-Heading text-Heading-sm font-bold text-blue2"
            >
              Why Us?
            </motion.div>
            <motion.div
              variants={fadein("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="md:pr-10 px-2 flex flex-col md:gap-4 gap-2"
            >
              <div className=" flex flex-row md:gap-4 ">
                <div className="flex pt-1 ">
                  <FaCheckCircle className="md:w-7 md:h-7 w-5 h-5 " />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="md:text-SubHeading text-SubHeading-sm  font-semibold">
                    Big Data Experts
                  </h1>
                  <p className="md:text-Para text-Para-sm gray-800">
                    Our experts profoundly analyze the peculiarities of your
                    business and create a Big Data integration strategy which
                    helps you meet your long-term goals. give alternative text
                    for this text
                  </p>
                </div>
              </div>
              <div className=" flex flex-row md:gap-4 ">
                <div className="flex pt-1">
                  <FaCheckCircle className="md:w-7 md:h-7 w-5 h-5 " />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="md:text-SubHeading text-SubHeading-sm  font-semibold">
                    User-Friendly Delivery
                  </h1>
                  <p className="md:text-Para text-Para-sm gray-800">
                    Our UX/UI experts visualize and layout data in an
                    understandable and appealing way , so you can easily make
                    well-informed business decisions.
                  </p>
                </div>
              </div>
              <div className=" flex flex-row md:gap-4 ">
                <div className="flex pt-1">
                  <FaCheckCircle className="md:w-7 md:h-7 w-5 h-5 " />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="md:text-SubHeading text-SubHeading-sm  font-semibold">
                    Constant Support
                  </h1>
                  <p className="md:text-Para text-Para-sm gray-800">
                    We are always here to offer additional guidance and advice
                    or discuss new priorities you want to focus on.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }} //X:100
        whileInView={{ opacity: 1, scale: 1 }} //y:100
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        has
        context
        menu
        className="  md:w-[50%] w-full md:px-0 px-2"
      >
        <Image src={Why} alt="" className="" />
      </motion.div>
    </div>
  );
};

export default WhyUs;

"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import Competitive from "/public/assets/services/BigDataAnalytics/competitive.png";
import { CiDollar } from "react-icons/ci";
import Risk from "/public/assets/services/BigDataAnalytics/risk.png";
import BestWay from "/public/assets/services/BigDataAnalytics/BestWay.png";
import Image from "next/image";
const WhatGain = () => {
  return (
    <div className="w-full py-5 ">
      <div className="w-full md:px-36 px-2 flex flex-col md:items-start items-center md:gap-8 gap-4">
        <motion.div
        variants={fadein("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}>
          <div className="w-full flex flex-col gap-8">
            <h1 className="md:text-Heading text-Heading-sm w-full text-blue950 font-bold ">
              What will you gain?
            </h1>
          </div>
          <div className="md:w-[60%] w-full ">
            <h2 className="md:text-SubHeading text-SubHeading-sm text-slate-600 font-semibold">
              Implementing Big Data analytics within your organization offers
              numerous benefits that enable you to enhance services and achieve
              your business objectives.{" "}
            </h2>
          </div>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="w-full flex flex-col md:gap-8 gap-4"
        >
          <div className="flex md:flex-row flex-col md:gap-0 gap-3 ">
            <div className="md:w-[50%]  md:px-0 px-2 flex flex-col">
              <div className="md:w-[90%]  w-full flex gap-2">
                <Image src={Competitive} alt="" className="w-7 h-7 " />
                <h1 className="md:text-SubHeading text-SubHeading-sm font-semibold ">
                  Competitive Advantage
                </h1>
              </div>
              <div className="md:w-[70%] w-full">
                <p className="md:text-Para text-Para-sm  text-gray-800 pl-2">
                  Get ahead with an with a custom app built around your
                  company’s needs and special challenges. Today around 80% of
                  generated information is unstructured and can’t be analyzed by
                  the traditional technologies.
                </p>
              </div>
            </div>
            <div className="md:w-[50%]  md:px-0 px-2 flex flex-col">
              <div className="md:w-[90%]  w-full flex gap-2">
                <CiDollar className="w-7 h-7 text-black" />
                <h1 className="md:text-SubHeading text-SubHeading-sm font-semibold ">
                  Optimization of business expenditure{" "}
                </h1>
              </div>
              <div className="md:w-[70%] w-full">
                <p className="md:text-Para text-Para-sm text-gray-800 pl-2">
                  Analysis of your operational data allows you to optimize
                  business expenditure and use your budget effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-0 gap-3 ">
            <div className="md:w-[50%]  md:px-0 px-2 flex flex-col">
              <div className="md:w-[90%]  w-full flex gap-2">
                <Image src={Risk} alt="" className="w-6 h-6" />
                <h1 className="md:text-SubHeading text-SubHeading-sm font-semibold ">
                  Reducing risks caused by wrong decisions{" "}
                </h1>
              </div>
              <div className="md:w-[70%] w-full">
                <p className="md:text-Para text-Para-sm  text-gray-800 pl-2">
                  Data science helps decrease the surplus of information, while
                  Big Data analysis lets you have structured data, which reduces
                  risks caused by human error.
                </p>
              </div>
            </div>
            <div className="md:w-[50%]  md:px-0 px-2 flex flex-col">
              <div className="md:w-[90%]  w-full flex gap-2">
                <Image src={BestWay} alt="" className="w-5 h-5" />

                <h1 className="md:text-SubHeading text-SubHeading-sm font-semibold ">
                  The best way to handle large-scale information{" "}
                </h1>
              </div>
              <div className="md:w-[70%] w-full">
                <p className="md:text-Para text-Para-sm text-gray-800 pl-2">
                  Big Data is the best way to handle large-scale information,
                  especially if you have various types of data including
                  structured, semi-structured or scattered data.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatGain;

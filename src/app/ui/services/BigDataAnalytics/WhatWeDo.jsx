"use client";
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaDiamond } from "react-icons/fa6";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
const WhatWeDo = () => {
  return (
    <div className="w-full flex flex-col">
      <motion.div
      variants={fadein("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.8 }}>
        <div className="flex flex-col w-full text-center justify-center py-4">
          <h1 className="md:text-Heading text-Heading-sm text-blue950  font-bold ">
            What Do We Do?
          </h1>
        </div>
        <div className=" flex text-center justify-center ">
          <div className="flex flex-col gap-4 text-center justify-center md:w-2/3 w-full md:px-0 px-2">
            <p className="md:text-SubHeading text-SubHeading-sm font-semibold   ">
              In today’s digital world, data is rapidly growing. Big Data
              Analytics is changing business practices and technology, which in
              turn impacts the way companies do business.
            </p>
            <p className="md:text-Para text-Para-sm text-gray-800">
              We help you establish a strategy and define the right technologies
              according to your requirements and budget. Our experienced analytics
              ensure that your technology fits with your investments in data
              warehouse and BI.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center items-center md:py-8 py-6">
        <div className="md:w-24 md:h-24 w-12 h-12 rounded-full bg-blue3 flex items-center justify-center">
          <FaArrowDownLong className="h-20 w-6" />
        </div>
      </div>
      <div className="w-full">
        <div className="md:px-6 px-2 flex md:flex-row flex-col ">
          <div className="md:w-1/3 w-full">
            <h1
              className="md:text-SubHeading text-SubHeading-sm
             font-semibold md:text-start text-center  pt-4"
            >
              When collaborating with companies, we utilize best practices to
              effectively organize and consolidate scattered data:
            </h1>
          </div>
          <motion.div
            variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="flex flex-col md:py-6 py-4  "
          >
            <div className="flex md:flex-row flex-col md:gap-0 gap-2">
              <div className="flex flex-row-2 gap-3 md:w-[40%] w-full">
                <h1 className="">
                  <FaDiamond className="w-6 h-6 pt-2 text-blue3" />
                </h1>
                <p className="md:text-Para text-Para-sm text-gray-800">
                  Data mining, analytics and modelling
                </p>
              </div>
              <div className="flex flex-row-2 gap-3 md:w-[30%] w-full">
                <h1 className="">
                  <FaDiamond className="w-6 h-6 pt-2 text-blue3" />
                </h1>
                <p className="md:text-Para text-Para-sm text-gray-800 ">
                  Distributed , relational and analytical database development
                </p>
              </div>
              <div className="flex flex-row-2 gap-3">
                <h1 className="">
                  <FaDiamond className="w-6 h-6 pt-2 text-blue3" />
                </h1>
                <p className="md:text-Para text-Para-sm text-gray-800">
                  Work scheduling , reporting and dashboard development
                </p>
              </div>
            </div>
            <div className="flex md:flex-row  flex-col md:gap-4 gap-2 py-6">
              <div className="flex flex-row-2 gap-3 md:w-[35%] w-full">
                <h1 className="">
                  <FaDiamond className="w-6 h-6 pt-2 text-blue3" />
                </h1>
                <p className="md:text-Para text-Para-sm text-gray-800">
                  Data warehouse and ETL/data management
                </p>
              </div>
              <div className="flex flex-row-2 gap-3 md:w-[30%] w-full">
                <h1 className="">
                  <FaDiamond className="w-6 h-6 pt-2 text-blue3" />
                </h1>
                <p className="md:text-Para text-Para-sm">
                  Stream processing and search indexing
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

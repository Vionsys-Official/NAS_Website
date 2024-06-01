"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
const TestingStrategies = () => {
  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-6 py-3">
      <div className="max-w-xl md:mb-10 mb-6 md:mx-auto sm:text-center lg:max-w-2xl ">
        <motion.h2
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          <span className="relative inline-block">
            <span className="relative md:text-Heading text-Heading-sm text-blue950">
              Testing and Quality Assurance Strategies
            </span>
          </span>{" "}
        </motion.h2>
      </div>
      <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-3xl">
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <span className="md:text-Para text-Para-sm text-gray-800">
            Requirements Analysis: Clearly define and document all software
            requirements.
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <span className="md:text-Para text-Para-sm text-gray-800">
            Test Planning: Develop a comprehensive roadmap for the testing
            process.
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <span className=" md:text-Para text-Para-sm text-gray-800">
            Test Case Development: Design detailed test cases covering all
            scenarios.
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <span className=" md:text-Para text-Para-sm text-gray-800">
            Defect Tracking: Efficiently log, track, and resolve software
            defects.
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <span className=" md:text-Para text-Para-sm text-gray-800">
            Test Execution: Conduct thorough manual and automated testing.
          </span>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <span className=" md:text-Para text-Para-sm text-gray-800">
            Regression Testing: Re-run tests to ensure new changes don't affect
            existing functionality.
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestingStrategies;

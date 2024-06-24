"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";

const WhatWeProvide = () => {
  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  md:pt-10 pt-6">
      <motion.div
        variants={fadein("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }} className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 mt-10 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d9d7687a-355f-4502-8ec4-7945db034688"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative md:text-Heading text-Heading-sm text-blue2 font-extrabold">
              What We Provide
            </span>
          </span>{" "}
        </h2>
      </motion.div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }} //X:100
          whileInView={{ opacity: 1, scale: 1 }} //y:100
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
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
          <h6 className="mb-2 md:text-lg text-base font-semibold leading-5">
            Policy Management Systems
          </h6>
          <p className="md:text-Para text-Para-sm text-gray-800">
            Efficiently manage policy creation, modifications, renewals and
            cancellations with our comprehensive policy management system. Our
            solution ensures accuracy, compliance and a seamless experience for
            both administrators and customers.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }} //X:100
          whileInView={{ opacity: 1, scale: 1 }} //y:100
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
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
          <h6 className="mb-2 md:text-lg text-base font-semibold leading-5">
            Claims Processing Software
          </h6>
          <p className="md:text-Para text-Para-sm text-gray-800">
            Accelerate and simplify the claims process with our advanced claims
            management software. Improve customer satisfaction and reduce
            processing time with our intuitive platform.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }} //X:100
          whileInView={{ opacity: 1, scale: 1 }} //y:100
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
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
          <h6 className="mb-2 md:text-lg text-base font-semibold leading-5">
            Customer Relationship Management (CRM)
          </h6>
          <p className="md:text-Para text-Para-sm text-gray-800">
            Build stronger relationships with your clients through our CRM
            system tailored for the insurance industry. Enhance communication,
            track interactions and personalize services to meet the unique
            needs of each customer.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }} //X:100
          whileInView={{ opacity: 1, scale: 1 }} //y:100
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
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
          <h6 className="mb-2 md:text-lg text-base font-semibold leading-5">
            Underwriting Solutions
          </h6>
          <p className="md:text-Para text-Para-sm text-gray-800">
            Improve underwriting accuracy and efficiency with our intelligent
            underwriting tools. Make data-driven decisions and enhance risk
            assessment processes.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }} //X:100
          whileInView={{ opacity: 1, scale: 1 }} //y:100
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
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
          <h6 className="mb-2 md:text-lg text-base font-semibold leading-5">
            Compliance and Regulatory Reporting
          </h6>
          <p className="md:text-Para text-Para-sm text-gray-800">
            Stay compliant with industry regulations and streamline your
            reporting processes. Our software ensures you meet all legal and
            regulatory requirements efficiently.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }} //X:100
          whileInView={{ opacity: 1, scale: 1 }} //y:100
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
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
          <h6 className="mb-2 md:text-lg text-base font-semibold leading-5">
            Data Analytics and Business Intelligence
          </h6>
          <p className="md:text-Para text-Para-sm text-gray-800">
            Harness the power of data with our advanced analytics and business
            intelligence tools. Make informed decisions, identify trends and
            gain competitive insights.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeProvide;

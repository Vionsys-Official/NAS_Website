"use client";
import React from "react";
import { Cards } from "./data";
import { motion } from "framer-motion";
import { fadein } from "@/components/ui/variants";

const sectionThree = () => {
  return (
    <section className="flex items-center justify-center">
      <div className=" pb-5 mx-auto md:w-[76%] w-full p-1 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 px-4 lg:px-8 ">
        <h2 className="text-blue2 font-extrabold md:text-Heading text-Heading-sm pb-8">
          Why Choose Us ?
        </h2>
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          {Cards.map((data, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              key={index}
              className="relative p-px overflow-hidden transition duration-300 transform border rounded-xl shadow-sm hover:scale-105 group hover:shadow-xl"
            >
              <div className="relative md:p-5 p-1 h-full bg-white rounded-sm">
                <div className="flex flex-col md:mb-2 lg:items-center lg:flex-row">
                  <div className="flex items-center justify-center w-10 h-10 md:mb-4 mb-2 mr-2 rounded-full bg-blue-50 lg:mb-0">
                    <svg
                      className="w-8 h-8"
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
                  <h6 className="font-semibold text-CardHeading">
                    {data.heading}
                  </h6>
                </div>
                <p className="mb-2 text-Para text-gray-900">
                  {data.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default sectionThree;

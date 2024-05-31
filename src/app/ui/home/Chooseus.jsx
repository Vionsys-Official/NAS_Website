"use client";
import React from "react";
import Image from "next/image";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";

import ChooseUs from "./images/chooseus1.jpg";
const Chooseus = () => {
  return (
    <section id="chooseus">
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col max-w-screen-lg overflow-hidden  rounded shadow-sm lg:flex-row sm:mx-auto">
          {/* Image section */}
          <div className="relative lg:w-1/2">
            <Image
              src={ChooseUs}
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="18.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 101" />
            </svg>
          </div>
          {/* Content section */}
          <div className=" md:h-[70vh] h-auto flex flex-col justify-center  bg-white lg:p-16 lg:pl-10 lg:w-[50vw]">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Why Choose Us
              </p>
            </div>
            {/* SVG dots */}
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute right-0 bottom-10 z-0 w-32 text-blue-gray-100 lg:w-32"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>
            {/* heading and para */}
            <motion.h5
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-3 text-MainHeading text-center text-blue-900 font-extrabold  sm:text-4xl"
            >
              What sets us apart?
            </motion.h5>
            <motion.p
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-5 text-Para text-black font-medium p-2 text-center h-auto"
            >
              <span className="font-bold  text-blue-950">Select us</span> for
              your IT needs, as we offer cutting-edge solutions, a team of
              highly skilled experts, dependable support, and a commitment to
              customer satisfaction to drive your business to success, We offer
              innovative IT solutions, employ a team of highly skilled experts,
              deliver dependable support, and prioritize customer satisfaction
              to help your business excel.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chooseus;

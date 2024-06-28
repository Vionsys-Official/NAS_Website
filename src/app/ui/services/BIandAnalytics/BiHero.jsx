'use client'

import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';
import Hero3 from "/public/assets/services/BIdataAnalytics/hero3.jpg";
function BiHero() {
  return (
    <section className="overflow-x-hidden">
      <div className="relative w-full ">
        <Image src={Hero3} alt="" className="w-full md:h-[100vh] object-cover h-[60vh]" />

        <div className="absolute w-full inset-y-0 flex flex-col justify-center bg-gray-800 bg-opacity-60 items-center p-4 md:pl-20 md:pr-20 sm:pl-20 sm:pr-20 ">
          <motion.div
              initial={{ opacity: 0, scale: 0.7 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}>
            <span>
              <h1 className="text-white md:text-HeroHeading text-HeroHeading-sm font-extrabold py-4 s:w-72 capitalize">
                Business Intelligence and Analytics{" "}
              </h1>
              <p className="md:text-SubHeading text-SubHeading-sm text-white pt-2 pb-4 md:w-full ">
                Unlock innovation with our customized Product Development
                Solutions. Stay ahead in competitive markets with comprehensive
                services, state-of-the-art tools and expert guidance.
              </p>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BiHero;

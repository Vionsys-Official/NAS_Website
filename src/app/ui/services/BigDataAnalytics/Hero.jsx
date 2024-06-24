"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import BigData from "/public/assets/services/BigDataAnalytics/bigdata.jpg";
import DataScience from "/public/assets/services/BigDataAnalytics/data_science.png";
import Image from "next/image";

function Cards() {
  return (
    <section className="bg-white w-full">
      <div className="flex md:flex-row flex-col w-full pt-16">
        {/* section1 */}
        <div className="md:w-[50%] w-full flex flex-col gap-6 md:pt-40 pt-6 md:px-6 ">
          <motion.h1
            variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="md:text-HMain text-HMain-sm font-extrabold text-blue2 md:text-start text-center"
          >
            Big Data & Analytics Development Services
          </motion.h1>
          <motion.p
            variants={fadein("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="md:text-lg text-Para-sm text-slate-700 font-semibold"
          >
            We offer comprehensive big data consulting services designed to
            transform vast amounts of scattered information into structured,
            actionable data. Our expertise helps you develop products and
            services that leverage this data, enabling you to make informed
            decisions and enhance user experiences effectively. With our
            consulting services, you can ensure your data-driven initiatives are
            both impactful and efficient.
          </motion.p>
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
          className="md:w-1/2 w-full md:py-10 py-4  flex opacity-95"
        >
          <Image src={BigData} alt="" className="w-full  " />
        </motion.div>
      </div>
    </section>
  );
}

export default Cards;

"use client";
import Image from "next/image";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";

import Insurance from "/public/assets/industries/Insurance/Insurance.jpg";
import React from "react";

const Hero = () => {
  return (
    <section className=" w-[100vw]">
      {/* section1 */}
      <div className="w-full ">
        <Image src={Insurance} alt="" className="w-full" />
      </div>
      <div className="relative w-full -top-16 h-full flex justify-center items-center  ">
        <div className="w-[50%] h-32  flex justify-center items-center bg-white  rounded shadow">
          <motion.p
            variants={fadein("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className=" md:text-HeroHeading text-HMain-sm sm:p-4 font-bold text-blue2"
          >
            Insurance
          </motion.p>
        </div>
      </div>

      {/* section2 */}
      <div className="w-full">
        <div className="flex flex-col gap-5 justify-center items-center">
          <motion.h1
            variants={fadein("down2", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="md:text-Heading text-Heading-sm md:w-[50%] w-full text-center font-bold text-blue2"
          >
            Revolutionizing The Insurance Industry With Cutting-Edge Software
            Solutions
          </motion.h1>
          <p className="md:w-[50%] w-[90%] text-center md:text-lg  text-Para-sm font-semibold text-slate-600">
            Understanding the unique challenges and opportunities within the
            insurance industry is our specialty. Our suite of software solutions
            is designed to streamline operations, enhance customer experiences,
            and drive innovation. Whether you're an insurer, broker or agent,
            our technology empowers you to stay ahead in a rapidly evolving
            market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client"
import React from "react";
import Image from "next/image";
import heal from "/public/assets/industries/Healthcare/heal.jpg";
import { motion } from "framer-motion";


const Healfirst = () => {
  return (
    <div className="h-full w-full">
      {/* Hero section */}
      <div className="flex justify-center flex-col md:h-[100vh] h-[50vh] w-full bg-black">
        <Image
          className="absolute object-cover w-full bg-cover md:h-[100vh] h-[50vh] md:w-screen opacity-60"
          src={heal}
          alt="healthcare img"
        />
        <motion.div
           initial={{ opacity: 0, scale: 1.5 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{
             delay: 0.2,
             scale: { type: "spring", stiffness: 30 },
             opacity: { duration: 0.6 },
             ease: "easeInOut"
           }} 
         className=" relative flex justify-center text-center">
          <h1 className="text-white font-bold text-3xl md:text-4xl bg-gradient-to-l from-slate-50 to-green-500 bg-clip-text text-transparent">
            Leading the Future of
            <br /> <span className="text--white">Healthcare</span>
            <br /> with Strategic IT Partnerships
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Healfirst;

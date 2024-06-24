"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heal from "/public/assets/industries/DigitalTransformation/DigitalTrans.jpg";
const Healfirst = () => {
  return (
    <div className="h-full w-full">
      {/* Hero section */}
      <div className="relative flex justify-center flex-col md:h-[100vh] h-[50vh] w-full bg-black">
        <Image
          className="absolute object-cover w-full bg-cover md:h-[100vh] h-[50vh] md:w-screen opacity-70"
          src={heal}
          alt="healthcare img"
        />
        <motion.div 
        initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
        className=" absolute inste-0 right-0 md:w-[50%] w-full flex flex-col gap-4 md:px-10 px-4">
          <h1 className="text-black font-bold text-HMain-sm md:text-HMain">
          Welcome to Our IT
            <br /> <span className="text--white"> Digital Transformation Services </span>   
          </h1>
          <p className="md:text-HSub text-HSub-sm font-semibold">
        We drive innovation and help businesses thrive digitally. Our IT transformation services empower organizations to harness technology, optimize operations and deliver exceptional customer value.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Healfirst;

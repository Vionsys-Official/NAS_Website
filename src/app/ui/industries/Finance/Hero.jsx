"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FinanceHero from "@/../public/assets/industries/Finance/FinanceHero.jpg";

const Hero = () => {
  return (
    <div className="md:mb-16 mb-8 lg:h-[100vh] relative">
      <div className="relative h-[50vh] md:h-[70vh] lg:h-[90vh] bg-black">
        <Image
          src={FinanceHero}
          alt="Finance Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-95"
        />
        <motion.h1
        initial={{ opacity: 0, scale: 0.7 }} //X:100
                        whileInView={{ opacity: 1, scale: 1 }} //y:100
                        transition={{
                            delay: 0.2,
                            scale: { type: "spring", stiffness: 30 },
                            opacity: { duration: 0.6 },
                            ease: "easeInOut",
                        }}
         className="absolute inset-x-0 top-1/2 text-center text-white text-6xl font-bold tracking-wide z-10">
          Finance
        </motion.h1>
      </div>
      <div id="mission2" className="relative flex flex-col md:flex-row justify-center lg:w-[60vw] md:w-[80vw] w-[90vw] md:-top-10 -top-0 mx-auto overflow-hidden bg-white divide-y md:divide-y-0 md:divide-x rounded shadow">
        <div className="flex-1 md:p-8 p-4 text-center border-b md:border-b-0 " >
          <motion.p
          initial={{ opacity: 0, scale: 0.7 }} //X:100
                        whileInView={{ opacity: 1, scale: 1 }} //y:100
                        transition={{
                            delay: 0.2,
                            scale: { type: "spring", stiffness: 30 },
                            opacity: { duration: 0.6 },
                            ease: "easeInOut",
                        }}
          className="font-bold tracking-wide text-blue2">
            Strategic Partnerships
          </motion.p>
        </div>
        <div className="flex-1 md:p-8 p-4 text-center border-b md:border-b-0 ">
          <motion.p
          initial={{ opacity: 0, scale: 0.7 }} //X:100
                        whileInView={{ opacity: 1, scale: 1 }} //y:100
                        transition={{
                            delay: 0.2,
                            scale: { type: "spring", stiffness: 30 },
                            opacity: { duration: 0.6 },
                            ease: "easeInOut",
                        }}
           className="font-bold tracking-wide text-slate-600">
            Financial Planning and Analysis
          </motion.p>
        </div>
        <div className="flex-1 md:p-8 p-4 text-center">
          <motion.p 
          initial={{ opacity: 0, scale: 0.7 }} //X:100
                        whileInView={{ opacity: 1, scale: 1 }} //y:100
                        transition={{
                            delay: 0.2,
                            scale: { type: "spring", stiffness: 30 },
                            opacity: { duration: 0.6 },
                            ease: "easeInOut",
                        }}
          className="font-bold tracking-wide text-slate-600">
            Investment in Technology
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

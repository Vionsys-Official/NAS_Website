"use client";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import edu from "/public/assets/industries/Education/edu.jpg";
const Edufirst = () => {
  return (
    <section className="h-full w-full">
      {/* Main section */}
      <section className=" pt-24">
        <div className="container grid items-center justify-center gap-8 px-4  lg:grid-cols-2 lg:gap-12">
          {/* Elevate buisness */}
          <motion.div 
           initial={{ opacity: 0, y: -100 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{
             delay: 0.2,
             y: { type: "spring", stiffness: 30 },
             opacity: { duration: 0.6 },
             ease: "easeInOut"
           }} 
           className="space-y-4 text-center">
            <h1 className=" text-HMain-sm md:text-5xl font-bold tracking-tighter text-blue2 "
            >
              Elevate Your Learning Experience
            </h1>
            <p className="max-w-[600px] mx-auto text-center md:text-lg text-Para-sm font-semibold text-slate-600 rounded-md bg-gray-200 dark:text-gray-400 md:p-5 p-2">
              Our education service provider offers a comprehensive suite of
              programs and resources to help you achieve your academic and
              professional goals.
            </p>
          </motion.div>
          {/* Image section */}
          <div className="flex justify-center w-auto">
            <Image
              alt="Education Hero"
              className="w-full md:max-w-lg lg:max-w-none rounded-xl object-cover object-center"
              src={edu}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Edufirst;

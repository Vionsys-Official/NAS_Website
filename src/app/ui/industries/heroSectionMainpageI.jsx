"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadein } from "@/components/ui/variants";
import indystresHero from "/public/assets/industries/myIndustriesHero.jpg";
import Image from "next/image";
import Button from "@/components/ui/Button";
const heroSectionMainpageI = () => {
  return (
    <>
      <section className="relative w-full h-[60vh]  min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black">
          <Image
            alt="Heroic Figure"
            className="absolute inset-0 object-cover opacity-40  object-center"
            layout="fill"
            objectFit="cover"
            src={indystresHero}
          />
        </div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="md:text-MainHeading text-MainHeading-sm font-extrabold text-white drop-shadow-lg">
            Transforming Industries with Technology
          </h1>
          <p className="mt-4 text-Heading font-medium text-white drop-shadow-lg">
            Explore Our Industry-Specific Expertise
          </p>
          <div className="mt-4 flex flex-col items-center justify-center">
            <Button />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default heroSectionMainpageI;

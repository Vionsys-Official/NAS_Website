"use client";
import React from "react";
import ServiceHero from "/public/assets/services/ServiceHero.jpg";
import { motion } from "framer-motion";
import { fadein } from "@/components/ui/variants";
import Image from "next/image";
import Button from "@/components/ui/Button";
const herosectionMain = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black">
          <Image
            alt="Heroic Figure"
            className="absolute inset-0 object-cover opacity-45 object-center"
            layout="fill"
            quality={100}
            objectFit="cover"
            src={ServiceHero}
          />
        </div>

        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="relative z-10 max-w-4xl px-1 lg:px-8 text-center"
        >
          <h1 className="md:text-MainHeading text-MainHeading-sm font-extrabold text-white drop-shadow-lg leading-tight capitalize md:px-16">
            Innovative Software Services for Modern Enterprises
          </h1>
          <p className="md:mt-6 mt-6 md:text-Heading text-xl font-semibold text-white drop-shadow-lg">
            Explore Our Services
          </p>
          <div className="mt-4 flex flex-col items-center justify-center">
            <Button />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default herosectionMain;

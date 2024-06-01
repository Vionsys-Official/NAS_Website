"use client";
import Image from "next/image";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import React from "react";
import ProductImage from "/public/assets/services/ProductDevelopment/Productdevop.jpg";

function Hero() {
  return (
    <section className="overflow-x-hidden">
      <div className="relative w-full h-[60vh] md:h-[90vh]">
        <Image src={ProductImage} className="w-full h-full object-cover" alt=""/>

        <div className="absolute  inset-0 p-4 rounded-xl md:inset-y-0 md:right-20 flex justify-center items-center md:w-[50vw] w-full">
          <motion.p
            variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="text-white text-Para-sm  lg:text-SubHeading w-full md:w-auto px-4 md:px-4 py-4 md:py-2 bg-black bg-opacity-50 md:bg-black md:bg-opacity-50"
          >
            Unlock innovation with our customized Product Development
            Solutions. Stay ahead in competitive markets with comprehensive
            services, state-of-the-art tools, and expert guidance.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

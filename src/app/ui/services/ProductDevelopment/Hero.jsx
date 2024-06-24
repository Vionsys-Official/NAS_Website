"use client";
import Image from "next/image";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import React from "react";
import ProductImage from "/public/assets/services/ProductDevelopment/Productdevop.jpg";

function Hero() {
  return (
    <section className="overflow-x-hidden">
      <div className="relative w-full h-[60vh] md:h-[100vh]">
        <Image src={ProductImage} className="w-full h-full object-cover" alt=""/>
 
        <div className="absolute  inset-0 p-4 rounded-xl md:inset-y-0 md:right-20 flex md:justify-end items-center w-full">
          <motion.p
            variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="text-white text-SubHeading font-medium w-full px-4 py-4 md:py-2 md:w-[50vw] bg-black bg-opacity-50"
          >
            Unlock innovation with our customized Product Development
            Solutions. Stay ahead in competitive markets with comprehensive
            services, state-of-the-art tools and expert guidance.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

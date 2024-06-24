"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Cloud from "/public/assets/services/TestingandQA/Testing&QA.png"

function Hero() {
  return (
    <section>
    <div className="relative bg-black">
        <Image src={Cloud} alt='' className="inset-0 object-cover w-full md:h-full h-[70vh] md:opacity-85 opacity-30" />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }} //X:100
          whileInView={{ opacity: 1, scale: 1 }} //y:100
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }} className="absolute inset-y-0 left-0 md:w-1/2 w-full flex flex-col justify-center items-center">
          <h1 className='text-white md:text-HMain text-HMain-sm font-extrabold mb-3 text-center capitalize'>Testing and Quality Assurance</h1>
          <p className='text-white md:text-CardHeading text-CardHeading-sm text-center md:p-1 p-2'>We transform software testing and quality assurance through a
            customized approach that blends cutting-edge innovation with deep
            expertise. Driven by a commitment to excellence, we rigorously
            evaluate, enhance and perfect your software to ensure unmatched
            robustness, security and performance. Rely on us to take your
            software to new levels of dependability and user satisfaction,
            equipping your business for success in the fast-paced digital world.</p>
        </motion.div>
      </div>
    </section>
    
  );
}

export default Hero;

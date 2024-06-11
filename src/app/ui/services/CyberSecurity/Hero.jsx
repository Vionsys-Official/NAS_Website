"use client";
import React from "react";
import CyberSecurity from "/public/assets/services/CyberSecurity/cs2.jpg";
import { motion } from "framer-motion";

import Image from "next/image";
function Hero() {
  return (
    <section className="">
      <div className="relative w-full h-[80vh] ">
        <Image
          src={CyberSecurity}
          alt=""
          className="w-full h-full object-cover"
        />
        <motion.div
        initial={{ opacity: 0, scale: 0.7 }} //X:100
        whileInView={{ opacity: 1, scale: 1 }} //y:100
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }} className="absolute inset-0 flex pt-16 md:w-1/3 items-center justify-center px-4 text-center">
          <div>
            <span>
              <h1
                className="text-white md:text-HeroHeading text-lg font-extrabold  leading-[45px] md:py-8 py-2"
              >
                Cyber Security Solutions{" "}
              </h1>
              <p className="md:text-Para text-sm text-white pl-6  pt-0 pb-4">
                Explore a full suite of advanced Cyber Security Solutions
                designed specifically to meet your unique requirements. Our
                comprehensive services strengthen your defenses and provide
                robust protection ensuring your organization remains secure
                against a constantly evolving landscape of cyber threats.
                Safeguard your critical assets and maintain peace of mind with
                our state-of-the-art security measures and proactive threat
                management strategies.
              </p>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

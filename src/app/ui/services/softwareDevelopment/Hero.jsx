"use client";
import React from "react";
import { motion } from "framer-motion";
import SoftDev from "/public/assets/services/SoftDev/SoftDev1.jpg";
import Image from "next/image";
import Button2 from "@/components/ui/Button2";

const Hero = () => {
  return (
    <div className="relative flex h-[90vh] flex-col-reverse pt-16 py-6 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image src={SoftDev} alt="" />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }} //X:100
        whileInView={{ opacity: 1, scale: 1 }} //y:100
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="relative flex flex-col items-start h-[90vh] w-full max-w-3xl px-2 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
      >
        <div className="md:mb-16 md:py-4 py-2 lg:py-32 lg:max-w-xl md:h-[90vh] h-[55vh] flex flex-col md:justify-center justify-end">
          <h2 className=" lg:px-5 mb-5 md:text-HMain text-HMain-sm text-center font-bold tracking-tight text-blue2 sm:text-4xl sm:leading-none leading-10">
          Welcome to
            NAS Software <br className="hidden md:block" />
            Development Solutions
          </h2>
          <p className="md:mb-7 mb-4 text-center text-lg font-semibold text-slate-600">
            We transform your ideas into reality. Our team of expert developers,
            designers and project managers is dedicated to delivering
            cutting-edge software solutions tailored to your unique business
            needs.
          </p>
          <div className="flex justify-center md:mb-0 mb-5">
            <Button2 />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

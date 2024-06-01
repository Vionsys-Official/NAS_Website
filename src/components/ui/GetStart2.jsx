"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import Button from "./Button";

const GetStart2 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <motion.div
        variants={fadein("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        className="max-w-xl md:mx-auto text-center lg:max-w-2xl md:py-8 p-3"
      >
        <h1 className="md:text-Heading text-Heading-sm font-bold tracking-tight text-blue950 sm:text-4xl sm:leading-none leading-10 text-center">
          Begin Your Transformation Today!
        </h1>
        <p className="text-base text-gray-700 md:text-lg py-4">
          Take the first step towards transforming your business operations.
          Contact us for a complimentary consultation. Learn how our solutions
          can revolutionize your approach and drive your business forward.
        </p>
      </motion.div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default GetStart2;

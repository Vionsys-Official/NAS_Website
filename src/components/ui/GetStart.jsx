"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import Button from "./Button";

const GetStart = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <motion.div
        variants={fadein("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl py-8 md:px-0 px-2"
      >
        <h1 className="md:text-Heading text-Heading-sm font-bold tracking-tight text-blue950 sm:leading-none leading-10 text-center">
          Ready to Get Started?
        </h1>
        <p className="text-base text-gray-800 md:text-lg py-4 text-center">
          Ready to transform your business with our top-notch services? Contact
          us today for a free consultation and see how we can help you achieve
          your business goals.
        </p>
      </motion.div>
      <div className="flex flex-col items-center">
        <Button />
      </div>
    </div>
  );
};

export default GetStart;

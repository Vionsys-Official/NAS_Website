"use client";
import React from "react";
import Image from "next/image";
import AIMLHeroImage from "/public/assets/services/aiML/AIMLHeroImage.jpg";
import { motion } from "framer-motion";
import { fadein } from "@/components/ui/variants";

const aiMLSec1 = () => {
  return (
    <section className="relative w-full  lg:h-[100vh] h-[60vh]  min-h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 bg-black">
        <Image
          alt="Heroic Figure"
          className="absolute inset-0 object-cover opacity-60  object-center"
          layout="fill"
          objectFit="cover"
          src={AIMLHeroImage}
        />
      </div>
      <motion.div
        variants={fadein("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
        className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="md:text-5xl text-2xl  font-extrabold text-gray-100 drop-shadow-lg">
          Discover the Potential of AI and Machine Learning for Your Business
        </h1>
        <p className="mt-4 text-Para text-center text-gray-200 drop-shadow-lg">
          We harness cutting-edge algorithms to optimize decision-making and
          unlock fresh opportunities. With a steadfast commitment to excellence,
          we serve as trusted guides in navigating the digital frontier.
        </p>
      </motion.div>
    </section>
  );
};

export default aiMLSec1;

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Sectwo from "/public/assets/services/digitalMarketing/sectwo.jpg";

const sectionTwo = () => {
  return (
    <main className="px-2 py-10 w-full lg:px-8 bg-white">
      <div className="grid gap-10 lg:grid-cols-2 text-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="flex flex-col justify-center items-center"
        >
          <h5 className="mb-4 md:text-Heading text-Heading-sm font-extrabold text-blue2 leading-none capitalize">
            Boost Your Online Presence with NAS Infotech Pvt Ltd
          </h5>
          <p className="mb-6 md:px-2 text-slate-600 font-semibold text-lg">
            At NAS Infotech Pvt Ltd, we specialize in delivering top-notch
            digital marketing services designed to elevate your brand&apos;s
            online presence. Our expert team leverages the latest strategies and
            technologies to ensure your business stands out in the competitive
            digital landscapes.
          </p>
        </motion.div>
        <div>
          <Image
            className="object-cover w-full h-56 rounded-xl shadow-md shadow-blue-900 sm:h-96"
            src={Sectwo}
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default sectionTwo;

"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import slAewave from "/public/assets/services/salesforce/slaewave.jpeg";
import Image from "next/image";

const salesforcesec1 = () => {
  return (
    <section className="relative h-full w-full md:pt-14 pt-10 px-2">
      <div className="md:h-[91vh]">
        <div className="absolute inset-0">
          <Image
            src={slAewave}
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className="relative md:h-[80vh] flex gap-5 flex-col md:flex-row px-3 items-center"
        >
          <div className="inset-0 flex">
            <div className="py-3 mx-auto text-center mt-10 text-black rounded-md max-w-2xl">
              <h1 className="text-HMain-sm md:text-HMain font-extrabold">
                <span className="block text-white">
                  Elevate Your Business with Our Salesforce Services
                </span>
              </h1>
              <p className="mt-3 text-CardHeading-sm md:text-CardHeading text-slate-900 font-semibold md:mt-5">
                Empower your business with our tailored Salesforce services.
                Streamline operations, boost customer relationships and drive
                growth in today&apos;s dynamic digital landscape.
                <span className="block text-gray-800 mt-5 font-semibold">
                  Let us be your trusted partner in harnessing the full
                  potential of Salesforce.
                </span>
              </p>
              <Link
                className="mt-5 inline-block w-40 rounded-full bg-blue-500 hover:bg-blue2 px-4 py-2 font-semibold text-white duration-200 hover:bg-opacity-95 hover:text-white sm:w-48"
                href="/contact"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default salesforcesec1;

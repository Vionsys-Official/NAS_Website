"use client";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
const Healsec = () => {
  return (
    <>
      <div>
        <section className="w-full py-7 md:py-24 lg:py-3 flex justify-center">
          <div className="container space-y-10 px-4 md:px-6">
            {/* Our Expertise */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.h2
                  variants={fadein("down", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.8 }}
                  className="md:text-Heading text-Heading-sm text-center font-extrabold tracking-tighter  text-blue2"
                >
                  Our Areas of Expertise
                </motion.h2>
                <motion.p
                  variants={fadein("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.8 }}
                  className="max-w-[900px] text-slate-600 md:text-lg text-Para-sm  font-semibold"
                >
                  We specialize in a wide range of services to help our clients
                  succeed. From strategy to execution, we've got you covered.
                </motion.p>
              </div>
            </div>
            {/* cards area */}
            <div className="mx-auto border-b-2 shadow-xl backdrop-blur-3xl  rounded grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-5">
              <div className="grid gap-4 border-r-2 p-2 border-green-400">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  <RocketIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Product Strategy</h3>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  We help you define your product vision and roadmap to drive
                  growth.
                </p>
              </div>
              <div className="grid gap-4 border-r-2 p-2 border-green-400">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  <InfoIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Data Analytics</h3>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Our data experts help you make informed decisions with
                  actionable insights.
                </p>
              </div>
              <div className="grid gap-4 border-r-2 p-2 border-green-400">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  <CloudIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Cloud Solutions</h3>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  We architect and deploy scalable cloud infrastructure to power
                  your business.
                </p>
              </div>
              <div className="grid gap-4 border-r-2 p-2 border-green-400">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  <MegaphoneIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Digital Marketing</h3>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Our marketing experts help you reach and engage your target
                  audience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Healsec;
function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MegaphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

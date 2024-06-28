"use client";
import Image from "next/image";
import home1 from "./images/home1.jpg";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import EmblaCarousel from "@/components/ui/carousal";
const words = ["Superior", "Enhanced", "improved", "Elevated"];
import { motion } from "framer-motion";
const landing = () => {
  return (
    <>
      <main className="overflow-hidden">
        {/* image carousel*/}
        <EmblaCarousel />
        <section className="h-full w-full">
          {/* words swapper */}
          <div className="px-2 py-5 mx-auto max-w-full lg:w-[100vw] md:px-10 bg-slate-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="rounded shadow-md sm:p-4 lg:p-4 bg-gray-100">
              <div className="flex flex-col lg:flex-row items-center lg:items-start">
                <div className="py-4 w-screen flex md:px-4 px-2">
                  <div
                    className="md:text-MainHeading md:leading-10 text-MainHeading-sm mx-auto font-extrabold text-blue2 capitalize md:px-4 px-2">
                    Build
                    <FlipWords words={words} /> <br />
                    Business Online with Nas Infotech Pvt. Ltd.'s Expertise.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* legacy of innovation */}
          <div className="px-2 md:py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid md:gap-10 lg:grid-cols-2 justify-center items-center">
              <div className="md:p-4 p-2 flex flex-col gap-2">
                <motion.h5
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }}
                  className="mb-4 text-blue2 md:text-MainHeading text-MainHeading-sm text-start font-extrabold leading-none capitalize">
                  Explore our legacy&nbsp;
                  <br className="hidden md:block" />
                  of innovation And Excellence
                </motion.h5>
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }}
                  className="md:text-Para text-Para-sm text-start tracking-wide">
                  We are committed to turning your IT challenges into success
                  stories. Our expert team provides innovative and reliable IT
                  solutions tailored to your business needs. With a strong focus
                  on customer satisfaction, we offer unparalleled support and
                  advanced technology to help your business flourish in the
                  digital age.collaborate with us and discover the distinction.
                  that expertise and commitment can make.
                </motion.p>
                <hr className="md:border-green2 mt-1 border-2" />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }}
                className="">
                <Image
                  className="object-cover shadow-xl w-full h-56 rounded-xl  sm:h-96"
                  src={home1}
                  alt="img"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default landing;

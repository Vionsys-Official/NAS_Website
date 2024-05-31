'use client'
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import EmblaCarousel from "@/components/ui/carousal";
import variants from "@/components/ui/variants";
import { motion } from "framer-motion";
const words = ["Superior", "Enhanced", "improved", "Elevated"];
const landing = () => {
  return (
    <>
      <main className="">
        <EmblaCarousel />
        <section className="h-full w-full">
          {/* words swapper */}
          <div className="flex justify-center items-center h-full w-screen">
            <div className=" md:h-[20vh] w-screen flex px-4">
              <div className="md:text-MainHeading text-xl mx-auto py-4 md:font-thin text-black ">
                Build
                <FlipWords words={words} /> <br />
                Business Online with Nas Infotech Pvt. Ltd.'s Expertise.
              </div>
            </div>
          </div>
          {/* legacy of innovation */}
          <div className="px-4 py-6 mx-auto max-w-full lg:w-[90vw] md:px-24 lg:px-4">
            <div className="rounded shadow-2xl sm:p-8 lg:p-10 bg-white">
              <div className="flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-[30vw] w-full lg:mb-0 mb-6 lg:pr-8 text-center lg:text-left">
                  <h2 className="md:py-10 text-blue-900 font-sans md:text-MainHeading text-MainHeading-sm  font-bold tracking-normal sm:text-4xl sm:leading-none">
                    Explore our legacy of
                    <br className="hidden md:block" />
                    innovation{" "}
                    <span className="inline-block text-deep-purple-accent-400">
                      And Excellence
                    </span>
                  </h2>
                </div>
                <div className="lg:w-2/3 w-full px-4 lg:px-0">
                  <p className="md:text-xl text-Para-sm tracking-wide ">
                    We are dedicated to transforming your IT challenges into
                    success stories. Our expert team provides innovative and
                    reliable IT solutions tailored to your business needs. With
                    a strong focus on customer satisfaction, we offer
                    unparalleled support and cutting-edge technology to help
                    your business thrive in the digital age. Partner with us and
                    experience the difference that expertise and commitment can
                    make.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default landing;

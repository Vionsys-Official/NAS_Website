"use client";
import Image from "next/image";
import home1 from "./images/home1.jpg";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import EmblaCarousel from "@/components/ui/carousal";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
const words = ["Superior", "Enhanced", "improved", "Elevated"];
const landing = () => {
  return (
    <>
      <main>
        {/* image carousel*/}
        <EmblaCarousel />
        <section className="h-full w-full">
          {/* words swapper */}
          <div className="px-4 py-5 mx-auto max-w-full lg:w-[90vw] md:px-24 lg:px-4">
            <div className="rounded shadow-2xl sm:p-8 lg:p-6 bg-gray-100">
              <div className="flex flex-col lg:flex-row items-center lg:items-start">
                <div className="py-5 w-screen flex px-4">
                  <div className="md:text-MainHeading md:leading-10 text-xl mx-auto text-black ">
                    Build
                    <FlipWords words={words} /> <br />
                    Business Online with Nas Infotech Pvt. Ltd.'s Expertise.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* legacy of innovation */}
          <div className="px-4 md:py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid md:gap-10 lg:grid-cols-2">
              <div className="lg:pr-10 p-4">
                <h5 className="mb-4 text-4xl text-blue-900 text-center font-extrabold leading-none">
                  Explore our legacy
                  <br className="hidden md:block" />
                  of innovation
                  <span className="inline-block text-deep-purple-accent-400">
                    And Excellence
                  </span>
                </h5>
                <p className="md:py-4 md:px-4 md:text-lg text-Para-sm text-center backdrop-blur-sm tracking-wide">
                  We are committed to turning your IT challenges into success
                  stories. Our expert team provides innovative and reliable IT
                  solutions tailored to your business needs. With a strong focus
                  on customer satisfaction, we offer unparalleled support and
                  advanced technology to help your business flourish in the
                  digital age.collaborate with us and discover the distinction.
                  that expertise and commitment can make.
                </p>
                <hr className="md:border-green-300 border-2" />
              </div>
              <div className="">
                <Image
                  className="object-cover shadow-xl w-full h-56 rounded-xl  sm:h-96"
                  src={home1}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default landing;

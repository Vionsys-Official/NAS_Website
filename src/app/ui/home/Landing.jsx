import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import EmblaCarousel from "@/components/ui/carousal";

const words = ["Superior", "Enhanced", "improved", "Elevated"];
const landing = () => {
  return (
    <>
      <main className="">
        <EmblaCarousel />
        <section className="h-full w-full">
          <div className="flex justify-center items-center h-full w-screen">
            <div className=" md:h-[20vh] w-screen flex px-4">
              <div className="md:text-4xl text-xl mx-auto py-4 md:font-thin text-black ">
                Build
                <FlipWords words={words} /> <br />
                 Business Online with Nas Infotech Pvt. Ltd.'s Expertise.
              </div>
            </div>
          </div>
          <div className="px-4 md:py-2 py-6 mx-auto sm:max-w-xl md:max-w-full lg:w-[90vw] md:px-24 lg:px-4">
            <div className=" rounded shadow-2xl sm:p-16">
              <div className="flex flex-col lg:flex-row">
                <div className=" lg:mb-0 lg:w-[30vw] ">
                  <h2 className=" md:py-10 text-blue-900 font-sans text-3xl text-center font-bold tracking-normal  sm:text-4xl sm:leading-none">
                    Explore our legacy of
                    <br className="hidden md:block" />
                     innovation {" "}
                    <span className="inline-block text-deep-purple-accent-400">
                    And Excellence
                    </span>
                  </h2>
                </div>
                <div className="lg:w-1/2 px-2">
                  <p className=" text-black font-medium p-2 leading-6">
                    we are dedicated to transforming your IT challenges into
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

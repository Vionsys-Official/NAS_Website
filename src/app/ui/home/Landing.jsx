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
            <div className="md:h-full md:h-[20vh] w-screen flex px-4">
              <div className="md:text-4xl text-xl mx-auto p-4 font-thin text-black ">
                Empower
                <FlipWords words={words} /> <br />
                Your Business Online with Nas Infotech Pvt. Ltd.'s Expertise.
              </div>
            </div>
          </div>
          <div className="h-full w-full p-4">
            <div className="flex justify-center z-auto bg-slate-200 shadow-md md:w-[150vh] w-auto mx-auto items-center flex-col border">
              <p className="p-5 font-semibold h-auto">
                Organizations worldwide are committed to enhancing the consumer
                experience, fortifying brand reputation, and enhancing
                operational efficiency. This journey towards achieving these
                goals reveals three key innovations: a cohesive
                interaction-focused platform, integration of diverse Ml
                functionalities, and AI tailored specifically for enhancing
                customer experiences.
              </p>
              <div className="md:text-hyperlinks text-blue-400 hover:text-blue-600 font-medium py-">
                  Learn more about us
              </div>
            </div>
          </div>
        </section>
      </main>
    </>

    
  );
};
export default landing;

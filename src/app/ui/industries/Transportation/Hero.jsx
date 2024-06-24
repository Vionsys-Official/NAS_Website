import React from "react";
import Link from "next/link";
import Image from "next/image";
import TransportHero from "@/../public/assets/industries/Transportation/Hero.jpeg";

const Hero = () => {
  return (
    <>
      <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6 overflow-x-hidden ">
              <h2 className="max-w-lg mb-6 flex flex-col items-center justify-center gap-1 md:flex-row md:text-HMain text-HMain-sm font-bold tracking-tight text-blue2 sm:leading-none">
                Logistics And{" "}
                <span className=" p-2 rounded-xl text-blue2 ">
                  Transportation
                </span>
              </h2>
              <p className="text-Para-sm text-slate-600 font-semibold md:text-lg">
                In the fast-paced world of transportation and logistics,
                efficiency and accuracy are paramount. Our cutting-edge IT
                solutions streamline operations, enhance supply chain
                visibility and improve delivery accuracy.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
          <Image
            src={TransportHero}
            className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
            alt=""
            width={2000}
            height={2000}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

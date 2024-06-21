import React from "react";
import Image from "next/image";
import FinanceHero from "@/../public/assets/industries/Finance/FinanceHero.jpg";

const Hero = () => {
  return (
    <div className="mb-16 lg:h-[100vh] relative">
      <div className="relative h-[50vh] md:h-[70vh] lg:h-[90vh] bg-black">
        <Image
          src={FinanceHero}
          alt="Finance Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-65"
        />
        <h1 className="absolute inset-x-0 top-1/2 text-center text-white text-6xl font-bold tracking-wide z-10">
          Finance
        </h1>
      </div>
      <div id="mission2" className="relative flex flex-col md:flex-row justify-center lg:w-[60vw] md:w-[80vw] w-[90vw] md:-top-10 -top-0 mx-auto overflow-hidden bg-white divide-y md:divide-y-0 md:divide-x rounded shadow">
        <div className="flex-1 p-8 text-center border-b md:border-b-0 " >
          <p className="font-bold tracking-wide text-blue2">
            Strategic Partnerships
          </p>
        </div>
        <div className="flex-1 p-8 text-center border-b md:border-b-0 ">
          <p className="font-bold tracking-wide text-slate-600">
            Financial Planning and Analysis
          </p>
        </div>
        <div className="flex-1 p-8 text-center">
          <p className="font-bold tracking-wide text-slate-600">
            Investment in Technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

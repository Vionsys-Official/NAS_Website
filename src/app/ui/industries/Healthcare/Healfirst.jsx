import React from "react";
import Image from "next/image";
import heal from "/public/assets/industries/Healthcare/heal.jpg";
const Healfirst = () => {
  return (
    <div className="h-full w-full">
      {/* Hero section */}
      <div className="flex justify-center flex-col md:h-[100vh] h-[50vh] w-full bg-black">
        <Image
          className="absolute object-cover w-full bg-cover md:h-[100vh] h-[50vh] md:w-screen opacity-60"
          src={heal}
          alt="healthcare img"
        />
        <div className=" relative flex justify-center text-center">
          <h1 className="text-gray-200 font-extrabold uppercase text-3xl md:text-5xl bg-gradient-to-l from-slate-50 to-green-500 bg-clip-text text-transparent">
            Leading the Future of
            <br /> <span className="text-white">Healthcare</span>
            <br /> with Strategic IT Partnerships
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Healfirst;

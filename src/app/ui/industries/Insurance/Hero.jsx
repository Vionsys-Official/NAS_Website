import Image from "next/image";
import Insurance from "/public/assets/industries/Insurance/Insurance.jpg";
import React from "react";

const Hero = () => {
  return (
    <section className=" w-[100vw]">
      <div className="w-full ">
        <Image src={Insurance} alt="" className="w-full" />
      </div>
      <div className="relative w-full -top-16 h-full flex justify-center items-center  ">
        <div className="w-[50%] h-32  flex justify-center items-center bg-white  rounded shadow">
          <p className=" text-5xl font-extrabold text-black">Insurance</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

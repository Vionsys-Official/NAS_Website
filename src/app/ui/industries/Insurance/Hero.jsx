import Image from "next/image";
import Insurance from "/public/assets/industries/Insurance/Insurance.jpg";
import React from "react";

const Hero = () => {
  return (
    <section className=" w-[100vw]">

      {/* section1 */}
      <div className="w-full ">
        <Image src={Insurance} alt="" className="w-full" />
      </div>
      <div className="relative w-full -top-16 h-full flex justify-center items-center  ">
        <div className="w-[50%] h-32  flex justify-center items-center bg-white  rounded shadow">
          <p className=" text-5xl font-extrabold text-black">Insurance</p>
        </div>
      </div>

      {/* section2 */}
      <div className="w-full py-3">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-4xl font-bold text-blue-500">Overview</h1>
          <p className="w-[50%] text-center text-lg font-normal text-gray-800">
            Understanding the unique challenges and opportunities within the
            insurance industry is our specialty. Our suite of software solutions
            is designed to streamline operations, enhance customer experiences,
            and drive innovation. Whether you're an insurer, broker, or agent,
            our technology empowers you to stay ahead in a rapidly evolving
            market.
          </p>
        </div>
      </div>

      

    </section>
  );
};

export default Hero;

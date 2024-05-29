import Image from "next/image";
import React from "react";
import Hero3 from "/public/assets/services/BIdataAnalytics/hero3.jpg";
function BiHero() {
  return (
    <section className="overflow-x-hidden">
      <div className="relative w-full ">
        <Image src={Hero3} className="w-full h-[100vh] object-cover  " />

        <div className="absolute w-full inset-y-0 flex flex-col justify-center bg-slate-500 bg-opacity-70 items-center pl-20 pr-20 ">
          <div>
            <span>
              <h1 className="text-white md:text-6xl text-xl font-extrabold py-4 ">
                Business Intelligence and Analytics{" "}
              </h1>
              <p className="md:text-2xl text-base text-white pt-2 pb-4 w-70 ">
                Unlock innovation with our customized Product Development
                Solutions. Stay ahead in competitive markets with comprehensive
                services, state-of-the-art tools, and expert guidance.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BiHero;

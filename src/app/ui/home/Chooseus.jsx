import React from "react";
import Image from "next/image";

import ChooseUs from "./images/chooseus1.jpg";
const Chooseus = () => {
  return (
    <section id="chooseus">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col max-w-screen-lg overflow-hidden  rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <Image
              src={ChooseUs}
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Why Choose Us 
              </p>
            </div>
            <h5 className="mb-3 text-3xl text-green-400 font-extrabold leading-none sm:text-4xl">
              What sets us apart?
            </h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold text-blue-950">Select us</span>  for your
              IT needs, as we offer cutting-edge solutions, a team of highly
              skilled experts, dependable support, and a commitment to customer
              satisfaction to drive your business to success, We offer
              innovative IT solutions, employ a team of highly skilled experts,
              deliver dependable support, and prioritize customer satisfaction
              to help your business excel.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chooseus;

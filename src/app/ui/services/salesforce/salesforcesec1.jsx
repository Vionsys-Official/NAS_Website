import React from "react";
import Link from "next/link";
import slAewave from "/public/assets/services/salesforce/slaewave.png";
import sect1TadyImage from "/public/assets/services/salesforce/sect1TadyImage.png";
import Image from "next/image";

const salesforcesec1 = () => {
  return (
    <section className="relative h-full w-full md:pt-14 pt-10 px-2">
      <div className="md:h-[91vh]">
        <div className="absolute inset-0">
          <Image
            src={slAewave}
            alt="Background vansh"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 md:h-[80vh] flex gap-5 flex-col md:flex-row flex- justify-evenly items-center ">
          <div className="inset-0 flex  bg-opacity-75">
            <div className=" py-3 mx-auto text-center mt-10 text-black bg-white bg-opacity-80 rounded-md max-w-2xl">
              <h1 className="text-2xl md:text-4xl font-extrabold">
                <span className="block text-black">
                  Elevate Your Business with Our
                </span>
                <span className="block text-blue-600">Salesforce Services</span>
              </h1>
              <p className="mt-3 text-sm md:text-base text-gray-700 md:mt-5">
                Empower your business with our tailored Salesforce services.
                Streamline operations, boost customer relationships, and drive
                growth in today's dynamic digital landscape.
                <span className="block text-gray-800 mt-5 font-semibold">
                  Let us be your trusted partner in harnessing the full
                  potential of Salesforce.
                </span>
              </p>
              <Link
                className="mt-5 inline-block w-40 rounded-full bg-blue-500 bg-opacity-10 px-4 py-2 font-semibold text-blue-800 duration-200 hover:bg-opacity-95 hover:text-white sm:w-48"
                href="/contact"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <Image
            src={sect1TadyImage}
            alt="Salesforce Logo"
            width={280}
            height={280}
          />
        </div>
      </div>
    </section>
  );
};

export default salesforcesec1;

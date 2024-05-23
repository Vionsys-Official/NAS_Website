import React from 'react'
import vision1 from "/public/assets/aboutUs/vision1.jpg"
import vision2 from "/public/assets/aboutUs/vision2.jpg"
import vision3 from "/public/assets/aboutUs/vision3.jpg"
import Image from 'next/image'

const vision = () => {
  return (
    <section>
       
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">

        <div className="flex flex-col justify-center md:pl-16 xl:pr-0 ">
           <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Our Vision
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            We envision a world where businesses of all sizes can harness the power 
            of technology to achieve their full potential. Our goal is to be the trusted 
            partner for companies seeking to innovate and transform their operations
             through cutting-edge software solutions.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <Image
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={vision3}
              alt=""
            />
            <Image
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={vision2}
              alt=""
            />
          </div>
          <div className="px-3">
            <Image
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={vision1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    
    </section>
  );
};

export default vision;
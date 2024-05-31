import React from 'react'
import Link from 'next/link';
import slAewave from '/public/assets/services/salesforce/slaewave.png'
import sect1TadyImage from '/public/assets/services/salesforce/sect1TadyImage.png'
import Image from 'next/image';


const salesforcesec1 = () => {
  return (
<section className="relative h-screen p-5">
  <div className="absolute inset-0">
    <Image
      src={slAewave}
      alt="Background vansh"
      layout="fill"
      objectFit="cover"
    />
  </div>
  <div className="relative z-10 flex items-end justify-center md:justify-end mt-14">
    <Image
      src={sect1TadyImage}
      alt="Salesforce Logo"
      width={280}
      height={280}
    />
  </div>
  <div className="absolute inset-0 flex items-center justify-center bg-opacity-75">
    <div className="px-4 py-3 mx-auto text-center text-black bg-white bg-opacity-80 rounded-md max-w-2xl">
      <h1 className="text-2xl md:text-4xl font-extrabold">
        <span className="block text-black">Elevate Your Business with Our</span>
        <span className="block text-blue-600">Salesforce Services</span>
      </h1>
      <p className="mt-3 text-sm md:text-base text-gray-700 md:mt-5">
        Empower your business with our tailored Salesforce services. Streamline operations, boost customer relationships, and drive growth in today's dynamic digital landscape.
        <span className="block text-gray-800 mt-5 font-semibold">Let us be your trusted partner in harnessing the full potential of Salesforce.</span>
      </p>
      <Link
        className="mt-5 inline-block w-40 rounded-full bg-blue-500 bg-opacity-10 px-4 py-2 font-semibold text-blue-800 duration-200 hover:bg-opacity-95 hover:text-white sm:w-48"
        href="/contact"
      >
        Get in touch
      </Link>
    </div>
  </div>
</section>

  )
}

export default salesforcesec1
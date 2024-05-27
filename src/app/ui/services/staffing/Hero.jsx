import React from 'react'
import ITStaffing from '/public/assets/services/ItStaffing/ItStaffing.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              IT Staffing
            </h2>
            <p className="text-base text-gray-700 md:text-lg py-4">
            In today's rapidly evolving technological landscape, finding the right talent is crucial for business success. Our IT staffing services are designed to bridge the gap between skilled professionals and organizations in need of top-tier talent.
            </p>
            <Link href='/' className="inline-flex items-center justify-center w-full h-12 p-6 mb-3 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none">Conatct Us</Link>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <Image
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src={ITStaffing}
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero
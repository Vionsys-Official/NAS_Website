import React from 'react';
import SoftDev from '/public/assets/services/SoftDev/SoftDev1.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse pt-16 py-6 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image src={SoftDev} alt=''/>
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="md:mb-16 py-4 lg:py-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Welcome to
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none leading-10">
            NAS Software{' '}
            <br className="hidden md:block" />
             Development{' '}
            <span className="inline-block text-deep-purple-accent-400">
              Solutions
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          We transform your ideas into reality. Our team of expert developers, designers, and project managers is dedicated to delivering cutting-edge software solutions tailored to your unique business needs.
          </p>
          <div className="flex items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
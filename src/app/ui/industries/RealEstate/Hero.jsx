import React from 'react'
import Button from '@/components/ui/Button';
import Estate from '/public/assets/industries/RealEstate/Estate.jpg'
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-black">
      <div className=''>
      <Image
        src={Estate}
        className="absolute inset-0 object-cover w-full h-full opacity-40"
        alt=""
      />
      </div>
      <div className="relative">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 162"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Revolutionize Your Real Estate   <br className="hidden md:block" />
              Business with Cutting-Edge IT Solutions
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
              Enhancing Efficiency, Elevating Customer Experience and Driving Growth
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
              <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                <h1 className='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none leading-10 text-center'>Real Estate</h1>
                <p className="text-base text-gray-700 md:text-lg py-4 text-justify">We empower real estate professionals with innovative IT solutions tailored to the unique demands of the industry. From advanced property management systems and immersive virtual tours to robust customer relationship management and comprehensive cybersecurity, our services are designed to streamline operations, enhance client interactions and boost business growth.  </p>
                <p className="text-base text-gray-700 md:text-lg py-4 text-justify">Partner with us to transform your real estate business and stay ahead in a competitive market.</p>
                <Link href=''><Button/></Link>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
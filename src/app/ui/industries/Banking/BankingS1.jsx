import React from 'react'
import h1 from '/public/assets/industries/Banking/h1.jpg'
import Image from 'next/image'
import Link from 'next/link'
import dataanalytics from '/public/assets/industries/Banking/DataAnalytics.jpg'
import cyber from '/public/assets/industries/Banking/cybersec.jpg'
import custexp from '/public/assets/industries/Banking/customerexp.jpg'


function BankingS1() {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 sm:h-[20vh]">
        <div>
          <p className="inline-block px-5 py-px mb-4 sm:text-Para-sm md:text-Para font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Services
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans md:text-MainHeading sm:text-MainHeading-sm font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">What</span>
          </span>{' '}
          Do We Offer?
        </h2>
        <p className="text-base text-gray-700 md:text-Para sm:text-Para-sm">
          Below mentioned are few services offered by us!!
        </p>
      </div>
    
    <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        <Link
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <Image
              src={h1}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5 sm:text-CardHeading-sm md:text-CardHeading">
                Digital Transformation
                </h6>
                <p className="md:text-Para sm:text-Para-sm text-gray-900 ">
                Implementing automation to streamline operations and reduce errors.
               
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <Image
              src={dataanalytics}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5 sm:text-CardHeading-sm md:text-CardHeading">
                Data Analytics
                </h6>
                <p className="md:text-Para sm:text-Para-sm text-gray-900 ">
                Providing insights into customer behavior for personalized services and targeted marketing.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <Image
              src={cyber}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5 sm:text-CardHeading-sm md:text-CardHeading">Cybersecurity</h6>
                <p className=" text-gray-900 sm:text-Para-sm lg:text-Para ">
                Employing advanced measures to protect sensitive data and systems from cyber threats.
               
    
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <Image
              src={custexp}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5 sm:text-CardHeading-sm md:text-CardHeading">
                Customer Experience
                </h6>
                <p className="text-sm text-gray-900 sm:text-Para-sm lg:text-Para ">
                Developing AI-driven chatbots for instant customer support.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      </div>
  )
}

export default BankingS1


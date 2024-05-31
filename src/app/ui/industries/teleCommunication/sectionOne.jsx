"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Hero from '/public/assets/industries/teleCommunication/telehero.jpg';
import { motion } from 'framer-motion';


const sectionOne = () => {
  return (
    <section className="relative">
      <Image
        src={Hero}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative h-[70vh] md:h-[100vh] bg-gray-900 bg-opacity-65">
        <div className="px-3 md:px-10 py-16 h-full flex flex-col items-start justify-center">
          <div className="flex flex-col items-start">
            <motion.div
             animate={{ y: [-100, 0] }}
             className="w-full border-l-8 border-emerald-400">
              <h2 className="w-full pl-2 md:px-6 mb-6 font-sans text-2xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Telecommunication Solutions by 
              <span className="text-green-500"> N</span><span className='text-stone-400'>AS </span> 
               Infotech Pvt Ltd
              </h2>
              <p className="w-full pl-2 md:px-6 mb-4 text-base text-gray-200 md:text-lg">
              In the fast-paced world of telecommunications, staying ahead of technological advancements is crucial. At NAS Infotech Pvt Ltd, we offer comprehensive telecommunication solutions designed to enhance connectivity, streamline operations, and drive innovation for businesses of all sizes. Our expertise in the telecommunications industry ensures that we deliver robust, reliable, and scalable solutions tailored to meet your unique needs.
              </p>
              <Link
                href={"#data"}
                className="inline-flex pl-2 md:px-6 items-center font-semibold tracking-wider transition-colors duration-200 text-emerald-400 hover:text-emerald-700"
              >
                Know more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default sectionOne
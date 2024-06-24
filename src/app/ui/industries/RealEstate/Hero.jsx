'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Estate from '/public/assets/industries/RealEstate/Estate.jpg'
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
            <motion.div
              variants={fadein("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }} className="w-full max-w-xl md:mb-12 mb-6 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-xl md:mb-6 mb-2 md:text-HMain text-HMain-sm font-bold tracking-tight text-white">
                Revolutionize Your Real Estate  Business with Cutting-Edge IT Solutions 
              </h2>
              <p className="max-w-xl mb-4 text-HSub-sm font-semibold text-gray-200 md:text-HSub">
                Enhancing Efficiency, Elevating Customer Experience and Driving Growth
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-2 md:p-10">
                <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                  <h1 className='md:text-Heading text-Heading-sm font-extrabold tracking-tight text-blue2 sm:text-4xl sm:leading-none leading-10 text-center'>Real Estate</h1>
                  <p className="text-base text-slate-600 md:text-Para md:py-4 py-2 md:text-justify">We empower real estate professionals with innovative IT solutions tailored to the unique demands of the industry. From advanced property management systems and immersive virtual tours to robust customer relationship management and comprehensive cybersecurity, our services are designed to streamline operations, enhance client interactions and boost business growth.  </p>
                  <p className="text-base text-gray-700 md:text-Para md:py-4 py-2 md:text-justify">Partner with us to transform your real estate business and stay ahead in a competitive market.</p>
                  <div className='flex flex-col items-center justify-center'><Button /></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
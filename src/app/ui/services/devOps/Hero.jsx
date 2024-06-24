'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import CRM from '/public/assets/services/DevOps/DevOpsImg.jpg'
import Image from 'next/image';
import Button2 from '@/components/ui/Button2';

const Hero = () => {
  return (
    <section>
    <div className="relative bg-black">
      <Image
        src={CRM}
        className="absolute inset-0 object-cover w-full h-full opacity-65"
        alt=""
      />
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
              variants={fadein("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }} className="w-full max-w-xl md:mb-12 mb-6 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 md:text-HMain text-HMain-sm font-bold tracking-tight text-white sm:leading-none capitalize">
              Welcome to NAS DevOps Services: <br className="hidden md:block" />
              
              </h2>
              <p className="max-w-xl md:mb-4 md:text-SubHeading text-SubHeading-sm text-gray-200">
              We understand the challenges businesses face in today is rapidly evolving technological landscape. That&apos;s why we are excited to introduce our comprehensive DevOps services designed to optimize your development workflow and drive your business forward.
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
              }} className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl md:p-10 p-2">
                <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                  <h1 className='md:text-Heading text-Heading-sm font-bold tracking-tight text-blue2 sm:text-4xl sm:leading-none leading-10 text-center'>Streamlining Your Development Process</h1>
                  <p className="text-base text-gray-800 md:text-lg md:py-4 py-2 md:text-justify text-start">At NAS DevOps Services, our mission extends beyond mere optimization of your development processes. We strive to foster a transformative approach that embeds agility, resilience and scalability into your core operations.</p>
                  <p className="text-base text-gray-800 md:text-lg md:py-4 py-2 md:text-justify text-start">Our DevOps framework is designed to not only accelerate your time-to-market but also to ensure that your systems are robust and secure, ready to meet the demands of the ever-changing technological landscape.</p>
                  <div className='flex flex-col justify-center items-center'>
                    <Button2/>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Hero
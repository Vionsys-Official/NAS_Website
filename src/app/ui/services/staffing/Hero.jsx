'use client'
import React from 'react'
import { motion } from 'framer-motion';
import ITStaffing from '/public/assets/services/ItStaffing/ITStaffing.jpg';
import Image from 'next/image';
import Button2 from '@/components/ui/Button2';

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:pt-0 lg:flex-col lg:pb-0">
      <motion.div
              initial={{ opacity: 0, scale: 0.7 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }} className="order-2 flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="md:mb-16 md:py-0 py-3 mb-4 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6 md:text-start text-center">
            <h2 className="max-w-lg md:mb-6 mb-2 md:text-HMain text-HMain-sm font-extrabold tracking-tight text-blue2 sm:text-4xl sm:leading-none">
              IT Staffing
            </h2>
            <p className="text-slate-600 font-semibold mb-4 md:text-CardHeading text-CardHeading-sm md:py-4">
            In today&apos;s rapidly evolving technological landscape, finding the right talent is crucial for business success. Our IT staffing services are designed to bridge the gap between skilled professionals and organizations in need of top-tier talent.
            </p>
            <div className='flex flex-col justify-center md:items-start items-center'>
              <Button2/>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="inset-y-0 right-0 w-full max-w-xl mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0 order-1">
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
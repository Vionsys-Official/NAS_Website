'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Heros from '/public/assets/industries/professionalService/heros.jpg';
import Image from 'next/image';
import Button from '@/components/ui/Button';

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
              }} className="order-2 flex flex-col items-start w-full max-w-xl px-4  lg:px-8 lg:max-w-screen-xl">
        <div className="md:mb-16 md:py-0 py-3 mb-4 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg md:mb-6 mb-2 md:text-MainHeading text-MainHeading-sm font-bold tracking-tight text-blue950 sm:text-4xl sm:leading-none">
            Empowering Businesses with Comprehensive Professional Services

            </h2>
            <p className="text-gray-800 md:text-lg text-base md:py-4">
            At NAS Infotech Pvt Ltd, we understand that the dynamic nature of the modern business environment demands specialized expertise and strategic support. Our professional services are designed to provide your business with the tools, insights and capabilities needed to thrive. We offer a wide range of services tailored to address the unique challenges and opportunities faced by businesses across various industries.

            </p>
            <div>
              <Button/>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="inset-y-0 pt-10 right-0 w-full max-w-xl mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0 order-1">
        <Image
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src={Heros}
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero
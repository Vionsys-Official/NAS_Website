'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Heros from '/public/assets/industries/professionalService/heros.jpg';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <div className="relative flex flex-col md:h-[100vh] md:pt-16 md:flex-col md:pb-0">
      <motion.div
              initial={{ opacity: 0, scale: 0.7 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }} className="order-2 text-center flex flex-col items-center justify-center md:h-full w-full px-4  md:w-1/2">
        <div className="md:py-0 py-3 md:max-w-lg">
          <div className="max-w-full ">
            <h2 className="max-w-lg md:mb-6 mb-2 md:text-MainHeading text-MainHeading-sm font-bold tracking-tight text-blue2 sm:text-4xl sm:leading-none">
            Empowering Businesses with Comprehensive Professional Services
            </h2>
            <p className="text-slate-600 font-semibold md:text-lg text-Para-sm md:py-4">
            At NAS Infotech Pvt Ltd, we understand that the dynamic nature of the modern business environment demands specialized expertise and strategic support. Our professional services are designed to provide your business with the tools, insights and capabilities needed to thrive. We offer a wide range of services tailored to address the unique challenges and opportunities faced by businesses across various industries.
            </p>
            <div className="md:py-0 py-4">
              <Button/>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="inset-y-0 right-0 w-full  pt-16  md:w-1/2  md:absolute">
        <Image
          className="object-cover w-full rounded shadow-lg md:rounded-none md:shadow-none md:h-full"
          src={Heros}
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero
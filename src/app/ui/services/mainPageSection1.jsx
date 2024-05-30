"use client"
import React from 'react'
import Button from '@/components/ui/Button';
import MyServise1 from '/public/assets/services/MyServise1.jpg'
import Image from 'next/image';
import { motion } from 'framer-motion';

const mainPageSection1 = () => {
  return (

    <section id="serviceBg" className="p-5 mx-auto">
        <motion.div  animate={{ y: [-100, 0] }}
        className="m-14 mx-auto max-w-6xl  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div  className="sm:text-center mx-6 my-7 lg:text-left">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-800">
              <span className="block xl:inline">Top-Quality Software Services</span>
              <span className="block text-violet-900 xl:block">Tailored for You</span>
            </h1>
            <p className="mt-5 text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
           
            Unlock your business's potential with our tailored software solutions. Experience innovation, reliability, and excellence with NAS Infotech. Let us bring your ideas to life and propel your success forward. Contact us today to discover how we can transform your software experience.
            </p> 
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <Button />
            </div>
            </div>
         
          
          <div className="lg:inset-y-0 lg:right-0 shadow-md lg:w-1/2 ">
            <Image width={550} height={500} className="object-cover" src={MyServise1} alt="" />
         
        </div>
        </motion.div>
      </section>

  )
}

export default mainPageSection1
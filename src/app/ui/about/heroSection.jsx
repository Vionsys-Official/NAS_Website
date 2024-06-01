"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import AboutUs from '/public/assets/aboutUs/about1.jpg';
// import Button from '@/components/ui/Button';


const heroSection = () => {
  return (
    <section className="relative">
      <Image
        src={AboutUs}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative h-[50vh] md:h-[100vh] bg-gray-900 bg-opacity-30">
        <div className="px-3 md:px-10 py-16  h-full flex flex-col items-start justify-center">

          <div className="flex w-full flex-col items-center">
            <motion.div
             animate={{ y: [-100, 0] }}
             className=" border-l-8 border-r-8 backdrop-blur-sm py-4 bg-gray-900 bg-opacity-30 text-center border-blue1">
              <h2 className="w-full pl-2 md:px-6 mb-6 font-extralight text-2xl tracking-tight text-gray-200 sm:text-4xl sm:leading-none">
              Transform Your Ideas Into Reality
              </h2>
              <h1 className="w-full pl-2 md:px-6 mb-4 text-3xl font-bold text-gray-100 md:text-4xl">
              Ready to take your IT solutions to the next level?
              </h1>
             {/* <p className='pl-2 md:px-6'> 
                <Button/></p> */}
            </motion.div>
           </div>
           
        </div>
      </div>
    </section>
  )
}

export default heroSection
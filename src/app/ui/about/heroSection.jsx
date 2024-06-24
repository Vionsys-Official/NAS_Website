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
      <div className="relative h-[50vh] md:h-[100vh] bg-gray-900 bg-opacity-20">
        <div className="px-3 md:px-10 py-16  h-full flex flex-col items-start justify-center">

          <div className="flex w-full flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className=" border-l-8 border-r-8 backdrop-blur-md py-4 bg-black bg-opacity-25 text-center border-blue3">
              <h2 className="md:text-MainHeading text-MainHeading-sm font-extrabold text-white capitalize">
                Transform Your Ideas Into Reality
              </h2>
              <h1 className="md:text-SubHeading text-xl capitalize font-semibold text-white md:px-4 px-2">
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

export default heroSection;
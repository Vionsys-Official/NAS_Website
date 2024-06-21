'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Cloud from "/public/assets/services/CloudComputing/Cloud.jpeg"
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <div className="relative bg-black">
        <Image src={Cloud} alt='' className="inset-0 object-cover w-full md:h-full h-[80vh] opacity-85" />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }} //X:100
          whileInView={{ opacity: 1, scale: 1 }} //y:100
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }} className="absolute inset-y-0 right-0 md:w-1/2 w-full flex flex-col justify-center items-center">
          <h1 className='text-white md:text-Heading text-Heading-sm font-bold mb-6 text-center'>Welcome to NAS Cloud Computing Services</h1>
          <h3 className='text-white md:text-SubHeading text-SubHeading-sm font-semibold mb-6 text-center'>Empowering Your Business with Cutting-Edge Cloud Computing</h3>
          <p className='text-white md:text-Para text-Para-sm md:text-justify text-center md:p-1 md:px-5 p-2'>we offer state-of-the-art cloud computing solutions designed to elevate your business. Our secure, scalable and reliable services help you innovate, reduce costs and improve efficiency. From startups to enterprises, we tailor our offerings to meet your unique needs. Discover the future of computing with NAS.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;
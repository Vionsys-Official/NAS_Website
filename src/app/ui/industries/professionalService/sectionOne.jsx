"use client"
import React from 'react'
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Heros from '/public/assets/industries/professionalService/heros.jpg';
import { motion } from 'framer-motion';


const sectionOne = () => {
  return (
    <section className='bg-rose-900'>
    <div className="relative h-[80vh] md:h-[100vh] flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
    <div className="inset-y-0 top-0 right-0 z-0 px-4 md:px-0 pr-0 mb-0 mx-0 w-7/12 max-w-full absolute xl:px-0">
      
      <Image
        className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none h-full block"
        src={Heros}
        alt=""
      />
    </div>
    <div className="relative h-full flex flex-col items-start justify-center w-full md:px-4">
      <motion.div 
      animate={{ y: [-100, 0] }}
       className="lg:max-w-3xl rounded-2xl bg-gray-700 bg-opacity-50 p-5 backdrop-blur-md">
       
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl sm:leading-none">
        Empowering Businesses with Comprehensive Professional Services
        </h2>
        <p className="pr-5 mb-5 text-base text-gray-100 md:text-lg">
        At NAS Infotech Pvt Ltd, we understand that the dynamic nature of the modern business environment demands specialized expertise and strategic support. Our professional services are designed to provide your business with the tools, insights and capabilities needed to thrive. We offer a wide range of services tailored to address the unique challenges and opportunities faced by businesses across various industries.
        </p>
        <div className="flex items-center">
         <Button/>
        </div>
      </motion.div>
    </div>
  </div>
    </section>
  )
}

export default sectionOne
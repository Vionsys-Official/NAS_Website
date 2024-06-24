"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '/public/assets/services/digitalMarketing/hero.jpg';
import { motion } from 'framer-motion';

const sectionOne = () => {
  return (
    <section className='md:h-[80vh] h-[60vh] flex items-center pt-16'>
      
       <Image
          className="object-cover rounded-lg shadow-xl h-full lg:shadow-none w-full md:w-1/2"
          src={Hero}
          alt=""
        />
        <div className="w-full absolute backdrop-blur md:backdrop-blur-none flex justify-center md:justify-end pt-10 lg:px-20 xl:px-6">
            <motion.div
             animate={{ y: [-100, 0] }}
             className='w-[70%] md:w-[50%]'>
          <h2 className="mb-5 font-extrabold tracking-tight text-blue2 md:text-MainHeading text-MainHeading-sm sm:leading-none md:text-center">
          Digital Marketing Services
          </h2>
          <p className="mb-5 text-lg font-semibold text-slate-600 md:text-xl md:text-center px-12">
          Boost your online presence with our strategic solutions. From SEO to social media, we optimize your digital strategy for maximum impact and growth.
          </p>
          <div className="text-center">
            <Link
              href={"#faqs"}
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-blue2 hover:text-white hover:bg-blue2 transition duration-200 hover:scale-110 ease-out rounded shadow-md border border-slate-800 md:w-auto focus:shadow-outline focus:outline-none"
            >
              Know more
            </Link>
          </div>
          </motion.div>
         </div>
       </section>
  )
}

export default sectionOne
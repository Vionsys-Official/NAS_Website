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
        <div className="w-full absolute backdrop-blur md:backdrop-blur-none flex justify-center md:justify-end pt-10 lg:px-20 xl:px-6 px-0">
            <motion.div
             initial={{ opacity: 0, y: -100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{
               delay: 0.2,
               y: { type: "spring", stiffness: 30 },
               opacity: { duration: 0.6 },
               ease: "easeInOut",
             }}
             className='w-full md:w-[50%] md:px-0 px-3'>
          <h2 className="mb-5 font-extrabold tracking-tight text-blue2 md:text-MainHeading text-MainHeading-sm sm:leading-none md:text-center">
          Digital Marketing Services
          </h2>
          <p className="mb-5 text-lg font-semibold text-slate-600 md:text-xl md:text-center md:px-12 px-1">
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
'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Bi from '/public/assets/services/BIdataAnalytics/bi.jpg'
function S1() {
  return (
    <section2>
       <div className='flex flex-col md:flex-row'>
            <div className='md:mt-10 flex flex-col items-center w-full h-full md:w-1/2 pr-3 pl-3'>
                <motion.h3
                initial={{ opacity: 0, x: -80 }} //X:100
                whileInView={{ opacity: 1, x: 1 }} //y:100
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }} className='md:text-Heading md:mt-10 mt-5 md:pt-20 pt-2 font-extrabold text-center sm:w-full text-Heading-sm text-blue2 capitalize'>What is BI and Analytics?</motion.h3>
                <motion.p
                initial={{ opacity: 0, x: -80 }} //X:100
                whileInView={{ opacity: 1, x: 1 }} //y:100
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }} className='md:text-SubHeading mb-10 ml-30 mt-3 text-blue900 mr-30 text-center text-Para-sm'>Business Intelligence refers to the technologies, processes and practices used to collect, integrate, analyze and present an organization’s raw data to create insightful and actionable business information.</motion.p>
                </div>
                <div >
                    <Image
                    className=' object-cover md:mr-8 md:pr-10 mt-10 pl-5 '
                        src={Bi}
                        alt=""
                        height={500}
                        width={700}
                    />
                    </div>
                    </div>       
                </section2>

   
  )
}

export default S1

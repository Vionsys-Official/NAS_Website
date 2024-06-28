'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import image from '/public/assets/services/BIdataAnalytics/sql.png';
import PowerBI from '/public/assets/services/BIdataAnalytics/microsoftpowerbi.png';
import Tableau from '/public/assets/services/BIdataAnalytics/tableau2.jpg';
import Qlikq from '/public/assets/services/BIdataAnalytics/Qlikq.jpg'
function s2() {
  return (
  <section2>
    <div className=' text-center md:mt-10 mt-5'>
                    <motion.h6
                    initial={{ opacity: 0, x: -80 }} //X:100
                    whileInView={{ opacity: 1, x: 1 }} //y:100
                    transition={{
                      delay: 0.2,
                      scale: { type: "spring", stiffness: 30 },
                      opacity: { duration: 0.6 },
                      ease: "easeInOut",
                    }} className='md:text-Heading text-Heading-sm font-extrabold mt-3 text-blue2'>Business Intelligence Tools</motion.h6>
                <motion.p
                initial={{ opacity: 0, x: -80 }} //X:100
                whileInView={{ opacity: 1, x: 1 }} //y:100
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }} className='mb-10 text-lg font-semibold text-slate-600'>Below mentioned are few and many more to learn!!!</motion.p></div>
                <div className='flex mb-5 sm:p-4 flex-col md:flex-row p-2 items-center' >
                
                <Image
                 className='p-2 hover:shadow-lg '
                        src={image}
                        alt=""
                        height={300}
                        width={350}
                    ></Image>
                    
                         <Image
                     className='p-2'
                        src={Tableau}
                        alt=""
                        height={300}
                        width={350}
                    />
                   
                    
                    
                     <Image
                     className='p-2'
                        src={PowerBI}
                        alt=""
                        height={300}
                        width={350}
                    />

                   
                        <Image
                     className='p-2'
                        src={Qlikq}
                        alt=""
                        height={300}
                        width={350}
                    />
                     
                     
                    
                   
                </div>
   
  </section2>
  )
}

export default s2

"use client"
import React from 'react'
import LastSect from '/public/assets/industries/fieldSer/LastSect.jpg'
import { motion } from 'framer-motion';
import { fadein } from '@/components/ui/variants';
import { Divide } from 'lucide-react';
import Image from 'next/image';


const fieldSec4 = () => {
    return (
       <div className='w-full flex flex-col gap-6 md:px-10 px-4 py-8'>
        {/* flex1 */}
        <div className='w-full flex justify-center items-center'>
         <motion.p
         variants={fadein("left", 0.1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.8 }}
                         className='text-Heading-sm md:text-Heading  font-extrabold text-blue2 capitalize  dark:text-white'>
          Field Service Management Software
         </motion.p>
        </div>
        <div className=' w-full flex md:flex-row flex-col md:gap-14 gap-4'>
         {/* left side */}
         <div className='md:w-1/2 w-full'>
         <Image className='w-full md:h-[55vh] rounded-lg'
            src={LastSect}
            alt=""/>
         </div>
         <div 
         
                        className='md:w-1/2 w-full flex flex-col gap-5 md:py-10 py-5'>
             <div className='md:w-[90%] w-full '>
                <motion.p
                variants={fadein("right", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.8 }}
                         className='md:text-SubHeading text-SubHeading-sm font-bold text-slate-700'>        
                Software's to Power Your Growing Business
                </motion.p>
             </div>
             <div className='md:w-[90%] w-full flex justify-center items-center '>
             <motion.p variants={fadein("right", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.8 }}
                         className='w-full md:text-lg text-Para-sm font-semibold text-slate-600'>
             NAS's field service management software enables you to drive efficiency,
                                streamline your processes and optimize your entire service management experience.
                                Seamlessly integrate your ERPs & accounting systems, provide a great user experience
                                and unlock the productivity your company needs to grow.

             </motion.p>

             </div>

         </div>
        </div>
       </div>
   





    )
}

export default fieldSec4
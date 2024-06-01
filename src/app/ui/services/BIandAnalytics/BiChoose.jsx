"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { fadein } from '@/components/ui/variants';

function BiChoose() {
  return (
    <section4>
    <div className='text-center mt-10 overflow-x-hidden'>
                       <h6 className='text-3xl font-bold mt-5 p-10 text-blue900 '>Why choose us ???</h6>
               
       <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
           <div className="flex md:contents flex-row-reverse">
               <motion.div
                variants={fadein("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}
                className="relative p-4 my-6 text-gray-800 bg-blue-300 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                   <h3 className="text-lg font-semibold lg:text-xl">Expert Team</h3>
                   <p className="mt-2 md:text-Para text-Para-sm leading-6">Benefit from our certified BI and Data Analytics professionals who bring extensive experience and knowledge to the table.</p>
               </motion.div>
               <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                   <div className="flex items-center justify-center w-6 h-full">
                       <div className="w-1 h-full bg-green-300 rounded-t-full bg-gradient-to-r from- to-red-300">
                       </div>
                   </div>
                   <div className="absolute w-6 h-6 -mt-3 bg-green-400 border-4 border-green-500 rounded-full top-1/2"></div>
               </div>
           </div>
   
           <div className="flex md:contents">
               <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                   <div className="flex items-center justify-center w-6 h-full">
                       <div className="w-1 h-full bg-blue-300"></div>
                   </div>
                   <div className="absolute w-6 h-6 -mt-3   bg-green-400 border-4 border-green-500 rounded-full top-1/2"></div>
               </div>
               <motion.div 
                variants={fadein("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}
               className="relative p-4 my-6 text-gray-800  bg-blue-300 rounded-xl col-start-6 col-end-10 mr-auto">
                   <h3 className="text-lg font-semibold lg:text-xl">Tailored Solutions</h3>
                   <p className="mt-2 md:text-Para text-Para-sm leading-6">Enjoy customized Business solutions designed to meet the specific needs of your business, ensuring optimal performance and efficiency.</p>
               </motion.div>
           </div>
   
           <div className="flex md:contents flex-row-reverse">
               <motion.div
               variants={fadein("left", 0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: true, amount: 0.8 }}
                   className="relative p-4 my-6 md:my-0 text-gray-800  bg-blue-300 border-green-500 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                   <h3 className="text-lg font-semibold lg:text-xl">24/7 Support</h3>
                   <p className="mt-2 md:text-Para text-Para-sm leading-6">Rest assured with our dedicated support team available round the clock to assist you whenever you need it, ensuring minimal downtime and maximum productivity.</p>
                 </motion.div>
               <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                   <div className="flex items-center justify-center w-6 h-full">
                       <div className="w-1 h-full bg-green-300 rounded-t-full bg-gradient-to-b from-green-400 to-green-300">
                       </div>
                   </div>
                   <div className="absolute w-6 h-6 -mt-3  bg-green-400 border-4 border-green-500 rounded-full top-1/2"></div>
               </div>
           </div>
   
           <div className="flex md:contents">
               <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                   <div className="flex items-center justify-center w-6 h-full">
                       <div className="w-1 h-full bg-blue-300"></div>
                   </div>
                   <div className="absolute w-6 h-6 -mt-3  bg-green-400 border-4 border-green-500 rounded-full top-1/2"></div>
               </div>
               <motion.div
                variants={fadein("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}
                className="relative p-4 my-6 text-gray-800  bg-blue-300 rounded-xl col-start-6 col-end-10 mr-auto">
                   <h3 className="text-lg font-semibold lg:text-xl">Innovative Technology</h3>
                   <p className="mt-2 md:text-Para text-Para-sm leading-6">Stay ahead of the curve with our utilization of the latest cloud technologies, guaranteeing that your business remains competitive and adaptable. </p> 
               </motion.div>
           </div>
   
       </div>
   </div>
       </section4>
  )
}

export default BiChoose

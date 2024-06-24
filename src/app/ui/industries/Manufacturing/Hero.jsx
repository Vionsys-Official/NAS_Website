'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button'
import Image from 'next/image';
import Hero1 from '/public/assets/industries/Manufacturing/hero.png'

const Hero = () => {
    return (
        // <div
        //     className="relative bg-blue5">
        //     <div className="absolute inset-x-0 bottom-0">
        //         <svg
        //             viewBox="0 0 224 12"
        //             fill="currentColor"
        //             className="w-full -mb-1 text-white"
        //             preserveAspectRatio="none"
        //         >
        //             <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        //         </svg>
        //     </div>
        //     <motion.div
        //         variants={fadein("up", 0.2)}
        //         initial="hidden"
        //         whileInView={"show"}
        //         viewport={{ once: true, amount: 0.8 }}
        //         className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
        //         <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl text-center">
        //             <h2 className="mb-6 md:text-HMain text-HMain-sm font-bold text-blue2 leading-normal tracking-tight">
        //                 Empowering {' '}
        //                 <span className="relative text-blue2">Manufacturing Industries{' '}</span>
        //                 <br className="hidden md:block" />
        //                 with Cutting-Edge IT Solutions {' '}
        //             </h2>
        //             <p className="mb-6 text-Para-sm text-slate-600 md:text-lg font-semibold">
        //                 We specialize in delivering innovative IT solutions tailored specifically for the manufacturing sector. Our team of experts combines extensive industry knowledge with state-of-the-art technology to help manufacturers optimize their operations, enhance productivity and drive growth.
        //             </p>
        //             <div className="items-center">
        //                 <Button />
        //             </div>
        //         </div>
        //     </motion.div>
        // </div >

        <div className="relative bg-black">
      <div className=''>
        <Image
          src={Hero1}
          className="absolute inset-0 object-cover w-full h-full opacity-40"
          alt=""
        />
      </div>
      <div className="relative">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 162"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <motion.div
              variants={fadein("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }} className="w-full max-w-xl md:mb-12 mb-6 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-xl md:mb-6 mb-2 md:text-HMain text-HMain-sm font-bold tracking-tight text-white">
              Empowering Manufacturing Industries with Cutting-Edge IT Solutions
              </h2>
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-2 md:p-10">
                <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                  <h1 className='md:text-Heading text-Heading-sm font-extrabold tracking-tight text-blue2 sm:text-4xl sm:leading-none leading-10 text-center'>Manufacturing Industries</h1>
                  <p className="text-base text-slate-600 md:text-Para md:py-4 py-2 md:text-justify">  We specialize in delivering innovative IT solutions tailored specifically for the manufacturing sector. Our team of experts combines extensive industry knowledge with state-of-the-art technology to help manufacturers optimize their operations, enhance productivity and drive growth. </p>
                  
                  <div className='flex flex-col items-center justify-center'><Button /></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Hero
"use client"
import React from 'react'
import {Cards} from '@/app/ui/about/aboutdata'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';

const sectionthree = () => {
  return (
    <section>
     <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Why Choose Us?
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Moving</span>
          </span>{' '}
           forward by leaving something better behind
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        In a rapidly changing world, technology is everything.
         It's in the fabric of society and business. Even at the heart of human evolution. 
        It’s a great power that comes with great responsibility.
        </p>
      </div>


      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">

        {Cards.map((info , index)=>{
          return(<motion.div
             key={index}
             variants={fadein("up", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: true, amount: 0.8 }}
            className="max-w-md backdrop-blur-sm sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-blue-200 sm:mx-auto sm:w-16 sm:h-16">
            <info.icon className='text-2xl'/>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">{info.heading}</h6>
          <p className="mb-3 text-lg text-gray-900">
           {info.description}
          </p>
        </motion.div>)
        })}
       
      </div>
     </div>
    </section>
  )
}

export default sectionthree
"use client"
import React from 'react'
import { Cards } from '@/app/ui/about/aboutdata'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';

const sectionthree = () => {
  return (
    <section>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="md:text-MainHeading text-MainHeading-sm font-extrabold text-blue2">
              Why Choose Us?
            </motion.p>
          </div>
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
            className="max-w-lg mb-6 md:text-SubHeading text-SubHeading-sm font-bold capitalize md:mx-auto">
            <span className="relative inline-block">
              {/* <svg
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
              </svg> */}
              <span className="relative">Moving</span>
            </span>{' '}
            forward by leaving something better behind
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut"
            }}
            className="md:text-Para text-Para-sm">
            In a rapidly changing world, technology is everything.
            It's in the fabric of society and business. Even at the heart of human evolution.
            It’s a great power that comes with great responsibility.
          </motion.p>
        </div>


        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          {Cards.map((info, index) => {
            return (<motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="max-w-md backdrop-blur-sm sm:mx-auto sm:text-center">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-blue-200 sm:mx-auto sm:w-16 sm:h-16">
                <info.icon className='text-2xl' />
              </div>
              <h6 className="mb-3 md:text-CardHeading text-CardHeading-sm font-bold leading-5">{info.heading}</h6>
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
"use client"
import React from 'react'
import value1 from "/public/assets/aboutUs/value1.jpg"
import value2 from "/public/assets/aboutUs/value2.jpg"
import value3 from "/public/assets/aboutUs/value3.jpg"
import Image from 'next/image';
import { motion } from 'framer-motion';

const value = () => {
  return (
    <section>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">

          <div className="flex backdrop-blur-sm flex-col justify-center md:pl-16 xl:pr-0 ">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute right-0 bottom-0 z-0 w-32 text-blue-gray-100 lg:w-32"
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

            </span>
            <div className="max-w-xl mb-6">
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="max-w-lg mb-6 md:text-MainHeading text-MainHeading-sm font-extrabold text-blue2 text-start">
                Our Values
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="md:text-Para text-Para-sm">
                At our company, we uphold a commitment to honesty, integrity and ethics
                in everything we do. We foster innovation through teamwork, valuing diverse
                perspectives and treating everyone with respect. These core values guide our
                actions and inspire us to create a positive impact in our work and communities.
              </motion.p>
            </div>
          </div>

          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease
                    : "easeInOut",
                }}
              >
                <Image
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src={value1}
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease
                    : "easeInOut",
                }}
              >
                <Image
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src={value2}
                  alt=""
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease
                  : "easeInOut",
              }}
              className="px-3">
              <Image
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={value3}
                alt=""
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default value
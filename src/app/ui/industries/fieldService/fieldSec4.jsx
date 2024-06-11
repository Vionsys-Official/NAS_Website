"use client"
import React from 'react'
import LastSect from '/public/assets/industries/fieldSer/LastSect.jpg'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadein } from '@/components/ui/variants';


const fieldSec4 = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
                {/* Section 5 */}
                <div className="relative flex">
                    <div className="min-h-screen lg:w-1/3"></div>
                    <div id="MService" className="hidden w-3/4 min-h-screen dark:bg-gray-800 lg:block"></div> {/* ----- */}

                    <div
                        className="container flex flex-col justify-center w-full min-h-[50px] px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                        <h1 className="text-4xl font-semibold text-gray-800  capitalize lg:text-3xl dark:text-white">
                            Field <span className="text-blue-500">Service</span> <br />Management Software
                        </h1>

                        <div className="mt-5 lg:mt-10 lg:flex lg:items-center">
                            <Image height={500} width={500} className="object-cover object-center mb-12 w-full lg:w-[32rem] rounded-lg h-96"
                             src={LastSect} alt="" />

                            <div className="mt-8 lg:px-10 lg:mt-0">
                                <motion.h1 
                                variants={fadein("right", 0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.8 }}
                                className="text-4xl font-semibold text-gray-800 dark:text-white lg:w-72">

                                    Software's to Power Your Growing Business
                                </motion.h1>

                                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                    NAS's field service management software enables you to drive efficiency,
                                    streamline your processes and optimize your entire service management experience.
                                    Seamlessly integrate your ERPs & accounting systems, provide a great user experience
                                    and unlock the productivity your company needs to grow.
                                </p>


                            </div>
                        </div>

                    </div>
                </div>
            </section>
  )
}

export default fieldSec4
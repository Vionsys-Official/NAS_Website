'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import Construction from '/public/assets/industries/Construction/Construction3.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const Hero = () => {
    return (
        <div className="relative h-[90vh] flex flex-col-reverse md:pt-16 pt-12 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-2xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-[90vh] text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <Image src={Construction} alt='' />
            </div>
            <motion.div
                variants={fadein("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}
                className="text-center relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="md:mb-16 py-4 lg:my-28 lg:max-w-lg lg:pr-5">
                    <h2 className="md:mb-5 mb-2 md:text-HMain text-HMain-sm font-bold tracking-tight text-blue2  leading-8 md:leading-10">
                        Empowering the Construction   {' '}
                        <br className="hidden md:block" />
                        Industry With Cutting-Edge{' '}
                        <span className="inline-block text-blue2">
                            IT Solutions
                        </span>
                    </h2>
                    <p className="md:pr-5 md:mb-5 mb-3 text-Para-sm font-semibold text-slate-600 md:text-lg">
                        In today’s fast-paced world, the construction industry faces challenges like project management complexities and ensuring projects are completed on time and within budget. As a leading IT company, we provide tailored technology solutions to drive efficiency, enhance collaboration and optimize operations.
                    </p>
                    <div className="flex items-center flex-col justify-center">

                        <Button />

                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
"use client"
import React from 'react'
import Image from 'next/image';
import MySec1Field from '/public/assets/industries/fieldSer/MySec1Field.jpg'
import { motion } from 'framer-motion';
const fieldSec1 = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[100vh] lg:h-[100vh] min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-black">
                    <Image
                        alt="Heroic Figure"
                        className="absolute inset-0 object-cover opacity-40  object-center"
                        layout="fill"
                        objectFit="cover"
                        src={MySec1Field}
                    />
                </div>
                <motion.div 
                    animate={{ y: [-100, 0] }}
                    className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-200 drop-shadow-lg">
                        Optimize field service for seamless productivity.
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-light text-white drop-shadow-lg">
                        Achieve a holistic digital transformation by streamlining service workflows, eradicating silos, and fine-tuning orchestration among disparate systems through our Field Service Management Software.
                    </p>

                </motion.div>
            </section>

  )
}

export default fieldSec1
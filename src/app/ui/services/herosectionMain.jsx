"use client"
import React from 'react'
import ServiceHero from '/public/assets/services/ServiceHero.jpg';
import { motion } from 'framer-motion';
import { fadein } from '@/components/ui/variants';
import Image from 'next/image';
const herosectionMain = () => {
  return (
    <>
    {/* Hero Section */}
    <section className="relative w-full h-[60vh]  min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-black">
                    <Image
                        alt="Heroic Figure"
                        className="absolute inset-0 object-cover opacity-60  object-center"
                        layout="fill"
                        objectFit="cover"
                        src={ServiceHero}
                    />
                </div>
                
                <motion.div 
                variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }}
                className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-green-300 drop-shadow-lg">
                    Innovative Software Services for Modern Enterprises
                    </h1>
                    <p className="mt-4 text-Heading font-medium text-white drop-shadow-lg">
                    Explore our services
                    </p>
                </motion.div>
            </section>
    </>
  )
}

export default herosectionMain
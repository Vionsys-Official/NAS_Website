"use client"
import React from 'react'
import Image from 'next/image';
import MySec1Field from '/public/assets/industries/fieldSer/MySec1Field.jpg'
import { motion } from 'framer-motion';
const fieldSec1 = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[100vh] flex items-center justify-center">
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
                <h1 className="md:text-HMain text-HMain-sm font-extrabold text-gray-200 drop-shadow-lg">
                    Optimize Field Service for Seamless Productivity.
                </h1>
                <p className="mt-4 md:text-HSub text-HSub-sm font-semibold text-gray-200 ">
                    Achieve a holistic digital transformation by streamlining service workflows, eradicating silos and fine-tuning orchestration among disparate systems through our Field Service Management Software.
                </p>

            </motion.div>
        </section>

    )
}

export default fieldSec1
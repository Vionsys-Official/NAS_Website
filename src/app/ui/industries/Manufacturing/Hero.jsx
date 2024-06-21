'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button'

const Hero = () => {
    return (
        <div
            className="relative bg-blue5">
            <div className="absolute inset-x-0 bottom-0">
                <svg
                    viewBox="0 0 224 12"
                    fill="currentColor"
                    className="w-full -mb-1 text-white"
                    preserveAspectRatio="none"
                >
                    <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                </svg>
            </div>
            <motion.div
                variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}
                className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
                <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl text-center">
                    <h2 className="mb-6 md:text-HMain text-HMain-sm font-bold text-blue2 leading-normal tracking-tight">
                        Empowering {' '}
                        <span className="relative text-blue2">Manufacturing Industries{' '}</span>
                        <br className="hidden md:block" />
                        with Cutting-Edge IT Solutions {' '}
                    </h2>
                    <p className="mb-6 text-Para-sm text-slate-600 md:text-lg font-semibold">
                        We specialize in delivering innovative IT solutions tailored specifically for the manufacturing sector. Our team of experts combines extensive industry knowledge with state-of-the-art technology to help manufacturers optimize their operations, enhance productivity and drive growth.
                    </p>
                    <div className="items-center">
                        <Button />
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default Hero
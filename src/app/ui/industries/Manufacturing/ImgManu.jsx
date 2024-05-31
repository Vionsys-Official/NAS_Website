'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import Manufacturing from '/public/assets/industries/Manufacturing/Manufacturing.jpg'
import Image from 'next/image'

const ImgManu = () => {
  return (
    <div>
      <div>
        <div className='relative'>
          <div className='bg-black'>
            <Image src={Manufacturing} alt='' className='w-full opacity-55' />
          </div>
          <motion.div
            variants={fadein("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} className='inset-0 absolute flex flex-col justify-center items-center'>
            <p className='text-white md:text-4xl text-xl p-2 font-semibold md:py-32 md:leading-10 leading-none'>Driving Efficiency and Innovation in Manufacturing</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ImgManu
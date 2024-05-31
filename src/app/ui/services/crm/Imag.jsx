'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import CrmImage from '/public/assets/services/Crm/CrmImage.jpeg'
import Image from 'next/image'

const Imag = () => {
  return (
    <div>
      <div className='relative'>
        <Image src={CrmImage} alt='' className='w-full md:h-[80vh] h-[50vh] object-cover' />
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className='md:w-1/2 w-full inset-0 absolute'>
          <p className='text-white md:text-SubHeading text-SubHeading-sm font-semibold md:py-32 md:px-20 p-3 leading-10'>Elevate your business with our tailored CRM solutions, seamlessly integrating, streamlining operations and empowering growth through unparalleled support and cutting-edge technology.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Imag
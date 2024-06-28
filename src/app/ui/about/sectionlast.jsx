"use client";
import React from 'react'
import Button from '@/components/ui/Button';
import { motion } from "framer-motion";
const sectionlast = () => {
  return (
    <section className='max-w-full pt-4 pb-8 md:px-10 px-2 flex justify-center'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut"
        }}
        className='bg-slate-200 rounded-md w-[90%] flex flex-col md:flex-row justify-between py-4 md:px-8 px-3'>
        <motion.div>
          <h2 className='md:text-MainHeading text-MainHeading-sm font-extrabold capitalize text-blue2'>
            Explore how our expertise can benefit you.
          </h2>
          <p className='py-3 md:text-Para text-Para-sm'>
            Reach out to us today to discuss how we can support you in achieving your business objectives.
          </p>
        </motion.div>
        <div className='flex items-center justify-center'>
          <Button />
        </div>
      </motion.div>
    </section>
  )
}
export default sectionlast;
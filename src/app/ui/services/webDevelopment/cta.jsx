"use client"
import { fadein } from "@/components/ui/variants";
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'

const cta = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='w-[94%] md:w-4/6 flex items-center justify-center md:mb-2 mb-5'>
        <div className='flex flex-wrap gap-4 items-center justify-center md:p-6 p-2 md:m-10 m-2 bg-gradient-to-br from-slate-100 to-slate-300 rounded-bl-[20%] rounded-tr-[20%] shadow-md shadow-gray-400'>
            <div className='text-blue5 px-4 text-CardHeading-sm md:text-CardHeading text-center font-bold'>Contact us today to schedule a consultation and take the first step towards a stunning and effective website that stands out from the competition!</div>
            <Link href="#" className=''>
            <button className=' block w-full relative p-1 text-white animate-bounce px-4 rounded-md bg-blue2  isolation-auto z-10 border-2 border-blue-300
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue2 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold'>Contact Us</button>
            </Link>
        </div>
    </div>
    </div>
  );
};

export default cta;
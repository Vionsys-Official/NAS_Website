import React from 'react'
import Ecom from'/public/assets/industries/Ecommerce/Ecom.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
    <div className='relative group hidden sm:flex items-center justify-end sm:h-[70vh] md:h-[100vh] overflow-hidden'>
        <div className='w-1/3 bg-gradient-to-r from-transparent via-white to-white h-[90vh] md:h-[150vh] -rotate-6 md:-rotate-12 translate-x-6 md:translate-x-20 opacity-100'></div>
        <div className='w-3/5'>
            <Image className='object-cover h-[70vh] md:h-[100vh] w-full' src={Ecom} alt=''></Image>
        </div>
        <div className='sm:absolute inset-0 flex items-center justify-start cursor-pointer'>
            <h1 className='sm:mt-14 md:mt-0 flex flex-col font-sans w-full sm:w-2/5 md:w-3/5 lg:w-2/5 p-8 md:pl-14 lg:pl-24 xl:pl-52 tracking-tighter lg:tracking-wide text-MainHeading-sm md:text-MainHeading'>
                <span className='text-blue-400 font-bold '>Transform  </span> 
                Your
                <span className='text-green-600 font-bold text-HeroHeading-sm md:text-HeroHeading'> E-Commerce Experience </span>
                 with Our Cutting-Edge Software Solutions
            </h1>
        </div>
    </div>
    <div className='flex sm:hidden flex-col mt-14'>
        <div className='sm:absolute inset-0 flex items-center justify-start'>
            <h1 className='sm:mt-14 md:mt-0 flex flex-col font-sans w-full sm:w-2/5 md:w-3/5 lg:w-2/5 p-4 md:pl-14 lg:pl-24 xl:pl-52 tracking-tighter lg:tracking-wide text-MainHeading-sm md:text-MainHeading'>
                <span className='text-blue-400 font-bold '>Transform  </span> 
                Your
                <span className='text-green-600 font-bold text-HeroHeading-sm md:text-HeroHeading'> E-Commerce Experience </span>
                 with Our Cutting-Edge Software Solutions
            </h1>
        </div>
        <div className='w-full sm:w-3/5'>
            <Image className='object-cover sm:h-[70vh] md:h-[100vh] w-full' src={Ecom} alt=''></Image>
        </div>
    </div>
    </>
  );
};

export default Hero;
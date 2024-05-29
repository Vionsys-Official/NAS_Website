import React from 'react'
import Ecom from'/public/assets/industries/Ecommerce/Ecom.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative flex items-center justify-end h-[100vh] overflow-hidden'>
        <div className='w-1/3 bg-gradient-to-r from-transparent via-white to-white h-[150vh] -rotate-12 translate-x-20 opacity-100'></div>
        <div className='w-3/5'>
            <Image className='object-cover h-[100vh] w-full' src={Ecom} alt=''></Image>
        </div>
        <div className='absolute inset-0 flex items-center justify-start'>
            <h1 className='w-2/5 p-4 pl-60 text-MainHeading-sm md:text-MainHeading'>
                <span className='text-blue-400 font-semibold'>Transform  </span> Your
                <span className='text-green-600 font-semibold'> E-Commerce Experience </span>
                 with Our Cutting-Edge Software Solutions
            </h1>
        </div>
    </div>
  );
};

export default Hero;
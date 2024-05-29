import React from 'react'
import Image from 'next/image';
import webd from '/public/assets/services/webDev/webd1.jpg';

const Intro = () => {
  return (
    <div>
        <div className='flex flex-wrap md:gap-20 group h-full md:h-[100vh] items-center justify-end cursor-pointer'>
            <div className='flex md:hidden w-full md:w-2/5 h-[50vh]'>
            <Image className='w-full h-full object-cover md:rounded-full md:rotate-45' src={webd} alt="web" width={1000} height={1000}></Image>
            </div>
            <div className='md:relative w-full md:w-2/5 md:h-[100vh] p-4'>
              <div className='hidden md:flex bg-green-300 w-full h-[100vh] rounded-full rotate-45 opacity-50 translate-x-72'></div>
              <div className='md:absolute md:inset-0 flex flex-col justify-center md:pr-2'>
                <h3 className='text-MainHeading-sm md:text-MainHeading-sm lg:text-MainHeading font-semibold py-2 md:py-4'>Build Your Online Presence with Our High-Quality Web Development Services</h3>
                <p className='text-SubHeading-sm md:text-SubHeading md:pr-6 lg:pr-0'>Unlock the full potential of your business with tailored solutions that enhance user experience, drive engagement, and boost your digital footprint.</p>
              </div>
            </div>
            <div className='hidden md:flex w-full md:w-2/5 h-[50vh] md:h-[100vh]'>
            <Image className='w-full h-full object-cover md:rounded-full md:rotate-45' src={webd} alt="web" width={1000} height={1000}></Image>
            </div>
            
          </div>
    </div>
  );
};

export default Intro;
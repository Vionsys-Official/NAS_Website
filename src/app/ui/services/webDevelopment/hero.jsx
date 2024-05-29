import React from 'react'
import Image from 'next/image';
import web from '/public/assets/services/webDev/web2.jpg';

const hero = () => {
  return (
    <div className='md:relative overflow-hidden md:h-[100vh]'>
        <div className='h-[50vh] md:h-[100vh] w-full md:w-3/5'>
            <Image className='object-cover h-full w-full md:rounded-bl-[50%]' src={web} alt=''></Image>
        </div>
        <div className='hidden md:flex absolute inset-0 bg-gradient-to-r from-green-200 via-green-100 to-transparent opacity-100 w-3/5 h-[120vh] translate-x-[86%] translate-y-1/5 rotate-6'></div>
        <div className='md:absolute md:inset-0 flex flex-col p-4 md:p-0 md:gap-4 items-center md:items-end justify-center bg-gradient-to-r from-green-200 md:from-transparent via-green-100 md:via-transparent to-transparent'>
            <h1 className='md:w-2/5 md:pr-16 flex items-center justify-center text-MainHeading-sm md:text-MainHeading font-bold'>Build Your Online Presence with Our High-Quality Web Development Services</h1>
            <p className='md:w-2/5 md:pr-16 flex items-center justify-center text-Para-sm md:text-Para font-semibold'>Unlock the full potential of your business with tailored solutions that enhance user experience, drive engagement, and boost your digital footprint.</p>
        </div>
    </div>
  );
};

export default hero;
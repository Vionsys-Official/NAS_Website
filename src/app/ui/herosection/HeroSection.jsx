import React from 'react';
import Image from 'next/image';

const HeroSection = ({obj}) => {
  return (
    <div className='relative w-full h-[80vh] overflow-hidden group'>
        <Image className='object-cover h-full w-full transition-all group-hover:scale-105 ease-out duration-400' src={obj.content.image} alt="Background Image" height={1000} width={1000}></Image>
        <div className='absolute inset-0 text-white flex flex-col items-center justify-center'>
            <div className='w-[60%] text-start'>
                <h2 className='text-3xl font-extrabold'>{obj.content?.heading}</h2>
                <h1 className='text-6xl font-extrabold uppercase'>{obj.content.title}</h1>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;
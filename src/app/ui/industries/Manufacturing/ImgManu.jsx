import React from 'react'
import Manufacturing from '/public/assets/industries/Manufacturing/Manufacturing.jpg'
import Image from 'next/image'

const ImgManu = () => {
  return (
    <div>
        <div>
        <div className='relative'>
            <div className='bg-black'>
            <Image src={Manufacturing} alt='' className='w-full opacity-55'/>
            </div>
            <div className='inset-0 absolute flex flex-col justify-center items-center'>
                <p className='text-white md:text-4xl text-xl p-2 font-semibold md:py-32 md:leading-10 leading-none'>Driving Efficiency and Innovation in Manufacturing</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ImgManu
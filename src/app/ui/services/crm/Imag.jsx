import React from 'react'
import CrmImage from '/public/assets/services/Crm/CrmImage.jpeg'
import Image from 'next/image'

const Imag = () => {
  return (
    <div>
        <div className='relative'>
            <Image src={CrmImage} alt='' className='w-full md:h-[80vh] h-[50vh] object-cover'/>
            <div className='md:w-1/2 w-full inset-0 absolute'>
                <p className='text-white md:text-SubHeading text-SubHeading-sm font-semibold md:py-32 md:px-20 p-3 leading-10'>Elevate your business with our tailored CRM solutions, seamlessly integrating, streamlining operations and empowering growth through unparalleled support and cutting-edge technology.</p>
            </div>
        </div>
    </div>
  )
}

export default Imag
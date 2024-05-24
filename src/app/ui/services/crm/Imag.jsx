import React from 'react'
import CrmImage from '/public/assets/services/Crm/CrmImage.jpeg'
import Image from 'next/image'

const Imag = () => {
  return (
    <div>
        <div className='relative'>
            <Image src={CrmImage} alt='' className='w-full h-[80vh] object-cover'/>
            <div className='w-1/2 inset-0 absolute'>
                <p className='text-white text-3xl font-semibold py-32 leading-10'>Elevate your business with our tailored CRM solutions, seamlessly integrating, streamlining operations and empowering growth through unparalleled support and cutting-edge technology.</p>
            </div>
        </div>
    </div>
  )
}

export default Imag
import React from 'react'
import h3 from '/public/assets/industries/Banking/h3.jpg'
import Image from 'next/image'

function Bankinghero() {
  return (
    <section className="relative">
      <Image
        src={h3}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative h-[70vh] md:h-[100vh] bg-gray-900 bg-opacity-65">
        <div className="px-3 md:px-10 py-16 h-full flex flex-col items-start justify-center">
          <div className="flex flex-col items-start">
            <div className="w-full border-l-8 ">
              <h2 className="w-full pl-2 md:px-6 mb-6 font-sans text-2xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Enhance your banking services with the most advanced  
              <span className="text-green-500"> I</span><span className='text-stone-400'>T </span>
              solutions available.
              </h2>
              <p className="w-full pl-2 md:px-6 mb-4 text-base text-gray-200 md:text-lg">
              Information Technology (IT) offers a multitude of benefits to banks, fundamentally transforming their operational processes, enhancing customer service delivery, and enabling them to meet the evolving demands of the financial landscape.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bankinghero

import React from 'react'
import h3 from '/public/assets/industries/Banking/h3.jpg'
import Image from 'next/image'
import Button from '@/components/ui/Button'

function Bankinghero() {
  return (
    <section className="relative">
      <Image
        src={h3}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative h-[80vh] md:h-[110vh] bg-gray-900 bg-opacity-65">
        <div className="px-3 md:px-10 py-25 h-full flex flex-col items-start justify-center">
          <div className="flex flex-col items-end">
            <div className=" w-full md:w-1/2 border-r-0 md:border-r-8 pr-2 md:pr-10 text-center">
              <h2 className="w-full pl-2 pt-12 md:px-6 mb-6 font-bold tracking-tight text-blue-200 text-HMain-sm md:text-HMain sm:leading-none">
                Enhance Your Banking Services With The Most Advanced
                <span className="text-blue-200"> I</span><span className='text-blue-200'>T </span>
                Solutions Available.
              </h2>
              <p className="w-full pl-2 text-pretty md:px-6 mb-4 text-base text-blue-200 md:text-lg text-justify">
                Information Technology (IT) offers a multitude of benefits to banks, fundamentally transforming their operational processes, enhancing customer service delivery and enabling them to meet the evolving demands of the financial landscape.
              </p>
            </div>
            <div className="mb-10 text-center md:mb-16 lg:mb-20 mt-5 md:pr-64">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bankinghero

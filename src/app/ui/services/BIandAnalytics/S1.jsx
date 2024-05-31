import Image from 'next/image'
import React from 'react'
import Bi from '/public/assets/services/BIdataAnalytics/bi.jpg'
function S1() {
  return (
    <section2>
       <div className='flex flex-col md:flex-row'>
            <div className='mt-10 flex flex-col items-center w-full h-full md:w-1/2 pr-3 pl-3'>
                <h3 className='md:text-Heading md:mt-10 mt-5 md:pt-20 pt-2 font-medium sm:font-bold text-center sm:w-full text-Heading-sm text-blue-600 '>What is BI and Analytics?</h3>
                <p className='md:text-SubHeading mb-10 ml-30 mt-3 text-blue-800 mr-30 text-center text-Para-sm'>Business Intelligence refers to the technologies, processes, and practices used to collect, integrate, analyze, and present an organization’s raw data to create insightful and actionable business information.</p>
                </div>
                <div >
                    <Image
                    className=' object-cover md:mr-8 md:pr-10 mt-10 sm:pl-5 '
                        src={Bi}
                        alt=""
                        height={500}
                        width={700}
                    />
                    </div>
                    </div>       
                </section2>

   
  )
}

export default S1

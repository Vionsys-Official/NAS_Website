import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Mission from '@/app/ui/about/mission'
import Value from '@/app/ui/about/value'
import Vision from '@/app/ui/about/vision'
import Aboutsec2 from '/public/assets/aboutUs/aboutsec2.jpg'


function page() {
  return (
    <main id='mission' className=''>
       <section className="relative bg-transparent">
      <Image
        src={Aboutsec2}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 -mb-1 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a lazy dog
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
             
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up for updates
                </h3>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className=''>
     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-xl sm:p-16">
        <div className="flex items-center flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Welcome to
              <br className="hidden md:block" />
              NAS Infotech{' '}
              <span className="inline-block text-deep-purple-accent-400">
              Pvt. Ltd.
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base text-gray-700">
             " Where we provide top-notch IT services to help your business thrive in the digital age. Located in Pune, we specialize in delivering customized software solutions and a range of IT services tailored to meet your unique business requirements."
            </p>
            <Link
              href="/"
              aria-label=""
              className="font-semibold duration-200 text-purple-600 hover:text-purple-800">
                Know more
            </Link>
               
          </div>
        </div>
      </div>
     </div>
    </section>

    <Vision/>
    
    <Mission/>
  
    <Value/>
    
    </main>
  )
}

export default page
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import vision1 from "/public/assets/aboutUs/vision1.jpg"
import vision2 from "/public/assets/aboutUs/vision2.jpg"
import vision3 from "/public/assets/aboutUs/vision3.jpg"
import mission1 from "/public/assets/aboutUs/mission1.jpg"
import mission2 from "/public/assets/aboutUs/mission2.jpg"
import mission3 from "/public/assets/aboutUs/mission3.jpg"
import value1 from "/public/assets/aboutUs/value1.jpg"
import value2 from "/public/assets/aboutUs/value2.jpg"
import value3 from "/public/assets/aboutUs/value3.jpg"


function page() {
  return (
    <main id='mission' className='pt-16'>
       {/* <section className="relative bg-white">
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
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
    </section> */}

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

    <section>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">

        <div className="flex flex-col justify-center md:pl-16 xl:pr-0 ">
           <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Our Vision
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            We envision a world where businesses of all sizes can harness the power 
            of technology to achieve their full potential. Our goal is to be the trusted 
            partner for companies seeking to innovate and transform their operations
             through cutting-edge software solutions.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <Image
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={vision3}
              alt=""
            />
            <Image
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={vision2}
              alt=""
            />
          </div>
          <div className="px-3">
            <Image
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={vision1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    </section>

    <section>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
      <div className="flex items-center justify-center -mx-4 lg:pl-8">
          
          <div className="px-3">
            <Image
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={mission1}
              alt=""
            />
          </div>
          <div className="flex flex-col items-end px-3">
            <Image
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={mission2}
              alt=""
            />
            <Image
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={mission3}
              alt=""
            />
          </div>
        </div>


        <div className="flex flex-col pl-10 justify-center">
          <div className="mb-6">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Our Mission
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Our mission is to empower businesses with robust, scalable, 
            and secure IT solutions that enhance efficiency, foster innovation, 
            and drive growth. We are committed to delivering excellence through our
             comprehensive range of services, tailored to meet the unique needs of each client.
            </p>
          </div>
        </div>

       </div>
    </div>
    </section>

    <section>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">

        <div className="flex flex-col justify-center md:pl-16 xl:pr-0 ">
           <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Our Values
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
           At our company, we uphold a commitment to honesty, integrity and ethics 
           in everything we do. We foster innovation through teamwork, valuing diverse 
           perspectives and treating everyone with respect. These core values guide our 
           actions and inspire us to create a positive impact in our work and communities.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <Image
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={value1}
              alt=""
            />
            <Image
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={value2}
              alt=""
            />
          </div>
          <div className="px-3">
            <Image
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={value3}
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
    </section>
    
    </main>
  )
}

export default page
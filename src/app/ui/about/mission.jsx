import React from 'react'
import Image from 'next/image'
import mission1 from "/public/assets/aboutUs/mission1.jpg"
import mission2 from "/public/assets/aboutUs/mission2.jpg"
import mission3 from "/public/assets/aboutUs/mission3.jpg"

const mission = () => {
  return (
    <section>
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        
      <div className="grid gap-10 lg:grid-cols-2">
      <div className="flex z-10 items-center justify-center -mx-4 lg:pl-8">
          
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


        <div className="flex backdrop-blur-sm flex-col md:px-10 justify-center">
        <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute right-0 bottom-0 z-0 w-32 text-blue-gray-100 lg:w-32"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="24"
              />
            </svg>
            
          </span>
          <div className="mb-6">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl sm:leading-none">
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
  )
}

export default mission
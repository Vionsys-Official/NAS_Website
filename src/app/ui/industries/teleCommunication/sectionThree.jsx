import React from 'react'
import { Cards } from './data'


const sectionThree = () => {
  return (
    <section>

     <div className="px-4 pb-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-8 ">
        <h2 className='text-blue-900 font-bold md:text-4xl text-2xl pb-8'>Why Choose Us ?</h2>
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">

        {Cards.map((data,index)=>(<div key={index} className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="relative p-5 h-full bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-blue-50 lg:mb-0">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="font-semibold text-lg">{data.heading}</h6>
            </div>
            <p className="mb-2 text-md text-gray-900">
              {data.description}
            </p>
           </div>
        </div>
    ))}
       </div>
      </div>

     </section>

  )
}

export default sectionThree
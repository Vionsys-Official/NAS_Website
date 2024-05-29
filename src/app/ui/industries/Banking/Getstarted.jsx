import React from 'react'

function Getstarted() {
  return (
    <div className="">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:max-w-screen-full">
        <div className="mb-0 lg:max-w-lg text-center">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center lg:text-center">
            What are you waiting for !?
            <br className="hidden md:block" />
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
          Let's get started today itself.
          </p>
          <div className="mb-10 text-center md:mb-16 lg:mb-20">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-blue-800 transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Getstarted

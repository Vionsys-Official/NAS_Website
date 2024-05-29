import React from 'react'

const Hero = () => {
  return (
    <div className="relative bg-purple-400">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="md:mb-6 mb-2 md:text-HMain text-HMain font-bold text-white leading-tight">
            Welcome to NAS DevOps Services:{' '}
            <br className="hidden md:block" />
            Streamlining Your {' '}
            <span className="relative inline-block px-2">
              <div className="absolute inset-0 transform -skew-x-12 bg-teal-400" />
              <span className="relative text-teal-900">Development Process</span>
            </span>
          </h2>
          <p className="mb-6 text-base text-indigo-100 md:text-lg">
          We understand the challenges businesses face in today is rapidly evolving technological landscape. That's why we are excited to introduce our comprehensive DevOps services designed to optimize your development workflow and drive your business forward.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
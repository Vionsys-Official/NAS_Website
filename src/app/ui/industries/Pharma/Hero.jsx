import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className="relative bg-teal-600">
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
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
                <div className="relative max-w-3xl sm:mx-auto sm:max-w-2xl md:max-w-3xl sm:text-center">
                    <h2 className="mb-6 md:text-4xl font-bold tracking-tight text-white text-2xl sm:leading-none">
                        Innovative IT Solutions
                        <br className="hidden md:block" />
                        for the Pharmaceutical{' '}
                        <span className="relative inline-block">
                            Industry{' '}
                            <div className="w-full h-3 -mt-3 bg-deep-purple-accent-400" />
                        </span>
                    </h2>
                    <h6 className="mb-6 md:text-xl font-normal tracking-tight text-white text-lg sm:leading-none">Empowering Pharma Companies with Advanced Technology and Data-Driven Insights</h6>
                    <p className="mb-6 text-base font-light tracking-wide text-gray-300 md:text-lg">
                        We streamline operations, enhance R&D and ensure compliance with advanced technology. From optimizing clinical trials to managing supply chains, our tailored solutions improve efficiency and accelerate time-to-market. Discover how we can transform your pharma operations.
                    </p>
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-500 focus:shadow-outline"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
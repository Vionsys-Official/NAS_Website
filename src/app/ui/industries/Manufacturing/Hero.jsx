import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className="relative bg-indigo-500">
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
            <div className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
                <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                    <h2 className="mb-6 font-sans text-3xl font-bold text-white sm:text-4xl sm:leading-none leading-loose">
                        Empowering {' '}
                        <span className="relative text-teal-900">Manufacturing Industries</span>
                        <br className="hidden md:block" />
                        with Cutting-Edge IT Solutions {' '}
                        <span className="relative inline-block px-2">
                            <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                        </span>
                    </h2>
                    <p className="mb-6 text-base text-indigo-100 md:text-lg">
                        We specialize in delivering innovative IT solutions tailored specifically for the manufacturing sector. Our team of experts combines extensive industry knowledge with state-of-the-art technology to help manufacturers optimize their operations, enhance productivity, and drive growth.
                    </p>
                    <div className="items-center">
                        <Link
                            href="/"
                            className="mx-auto items-center h-12 px-6 py-3 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
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
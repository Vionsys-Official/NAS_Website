import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-full'>
                <div className="mx-auto lg:pt-40 flex flex-col mb-16 sm:text-center sm:mb-0">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Welcome</span>
                            </span>{' '}
                            to Our IT Digital Transformation Services
                        </h2>
                        <p className="text-base text-gray-700 md:text-xl">
                        We drive innovation and help businesses thrive digitally. Our IT transformation services empower organizations to harness technology, optimize operations, and deliver exceptional customer value.
                        </p>
                    </div>
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='relative -top-20'><path fill="#0099ff" fill-opacity="1" d="M0,256L40,224C80,192,160,128,240,128C320,128,400,192,480,213.3C560,235,640,213,720,192C800,171,880,149,960,149.3C1040,149,1120,171,1200,149.3C1280,128,1360,64,1400,32L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
    )
}

export default Hero
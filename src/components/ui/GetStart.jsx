import Link from 'next/link'
import React from 'react'

const GetStart = () => {
    return (
        <div>
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl py-8">
                <h1 className='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none leading-10 text-center'>Ready to Get Started?</h1>
                <p className="text-base text-gray-700 md:text-lg py-4">Ready to transform your business with our top-notch software development services? Contact us today for a free consultation and see how we can help you achieve your business goals.</p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-blue-500 focus:shadow-outline focus:outline-none"
                >
                    Get started
                </Link>
            </div>
        </div>
    )
}

export default GetStart;
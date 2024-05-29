import Link from 'next/link'
import React from 'react'

const GetStart2 = () => {
  return (
    <div>
            <div className="max-w-xl md:mx-auto text-center lg:max-w-2xl md:py-8 p-3">
                <h1 className='md:text-Heading text-Heading-sm font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none leading-10 text-center'>Begin Your Transformation Today!</h1>
                <p className="text-base text-gray-700 md:text-lg py-4">Take the first step towards transforming your business operations. Contact us for a complimentary consultation. Learn how our solutions can revolutionize your approach and drive your business forward.</p>
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

export default GetStart2;
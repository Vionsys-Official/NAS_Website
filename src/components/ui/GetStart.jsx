import Link from 'next/link'
import React from 'react'
import Button from './Button';

const GetStart = () => {
    return (
        <div>
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl py-8 md:px-0 px-2">
                <h1 className='md:text-Heading text-Heading-sm font-bold tracking-tight text-black sm:leading-none leading-10 text-center'>Ready to Get Started?</h1>
                <p className="text-base text-gray-800 md:text-lg py-4">Ready to transform your business with our top-notch services? Contact us today for a free consultation and see how we can help you achieve your business goals.</p>
                <Link href="/" className='flex flex-col items-center'>
                    <Button/>
                </Link>
            </div>
        </div>
    )
}

export default GetStart;
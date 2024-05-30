import React from 'react';
import Construction from '/public/assets/industries/Construction/Construction3.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const Hero = () => {
    return (
        <div className="relative flex flex-col-reverse md:pt-16 pt-12 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-2xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-[90vh] text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <Image src={Construction} alt='' />
            </div>
            <div className="text-center relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="md:mb-16 py-4 lg:my-28 lg:max-w-lg lg:pr-5">
                    <p className="inline-block md:mb-4 mb-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full">Transforming Construction with Innovative IT Services
                    </p>
                    <h2 className="md:mb-5 mb-2 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none leading-10">
                        Empowering the Construction   {' '}
                        <br className="hidden md:block" />
                        Industry with Cutting-Edge{' '}
                        <span className="inline-block text-purple-400">
                            IT Solutions
                        </span>
                    </h2>
                    <p className="md:pr-5 md:mb-5 mb-3 text-base text-gray-700 md:text-lg">
                        In today’s fast-paced world, the construction industry faces challenges like project management complexities and ensuring projects are completed on time and within budget. As a leading IT company, we provide tailored technology solutions to drive efficiency, enhance collaboration and optimize operations.
                    </p>
                    <div className="flex items-center flex-col justify-center">
                        <Link
                            href="/contact"
                        >
                           <Button/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
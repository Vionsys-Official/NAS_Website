import React from 'react';
import Expert from "/public/assets/services/CloudComputing/Expert.jpg";
import Image from 'next/image';

const Choose = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col mb-4 lg:justify-between lg:flex-row md:mb-6">
                <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                    <span className="inline-block mb-1 sm:mb-4">
                        Why to Choose NAS
                    </span>
                    <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                </h2>
                <p className="text-gray-700 lg:max-w-xl">
                    We pride ourselves on delivering exceptional cloud computing services tailored to your business needs. With a focus on expertise, support, innovation and proven success, here's why you should choose us:
                </p>
            </div>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <Image src={Expert} alt='' className='object-cover w-full h-56 md:h-64 xl:h-80' />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">Expert Team</p>
                        <p className="text-sm tracking-wide text-gray-300">
                            Benefit from our certified cloud professionals who bring extensive experience and knowledge to the table.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">
                            Tailored Solutions
                        </p>
                        <p className="text-sm tracking-wide text-gray-300">
                            Enjoy customized cloud solutions designed to meet the specific needs of your business, ensuring optimal performance and efficiency.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">24/7 Support</p>
                        <p className="text-sm tracking-wide text-gray-300">
                            Rest assured with our dedicated support team available round the clock to assist you whenever you need it, ensuring minimal downtime and maximum productivity.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">
                            Innovative Technology
                        </p>
                        <p className="text-sm tracking-wide text-gray-300">
                            Stay ahead of the curve with our utilization of the latest cloud technologies, guaranteeing that your business remains competitive and adaptable in the ever-evolving digital landscape.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose
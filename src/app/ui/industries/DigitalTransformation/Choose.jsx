import React from 'react'
import Digital from '/public/assets/industries/DigitalTransformation/Digital.jpg'
import Image from 'next/image'

const Choose = () => {

    const choose = [
        {
            id: 1,
            title: "Expertise",
            para: "With years of IT industry experience, our team brings deep domain knowledge and technical proficiency to every project.",
        },
        {
            id: 2,
            title: "Tailored Solutions",
            para: "We develop customized digital transformation strategies aligned with each client's unique goals and objectives.",
        },
        {
            id: 3,
            title: "Comprehensive Support",
            para: "We provide end-to-end services from initial consultation to implementation and ongoing support.",
        },
        {
            id: 4,
            title: "Proven Results",
            para: "Our track record demonstrates our success in helping clients across various industries achieve tangible business outcomes and stay competitive.",
        },
    ]

    return (
        <>
            <div className="px-4 mx-auto space-y-1 text-center mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-violet-400 dark:text-violet-600">NAS Infotech Pvt. Ltd.</span>
                <h2 className="pb-3 text-3xl font-bold md:text-4xl">Why Choose Us for Your Digital Transformation Journey?</h2>
            </div>
            <div className="relative px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                <div className="absolute inset-0">
                    <div className="absolute inset-y-0 z-0 w-full h-full bg-gray-100 lg:w-3/4" />
                </div>
                <div className="relative">
                    <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                        <div className="grid gap-12 row-gap-5 md:grid-cols-2">
                            {choose.map((item) => (
                                <div key={item.id}>
                                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                    <svg
                                        className="w-8 h-8 text-teal-900"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold text-lg leading-5">
                                {item.title}
                                </h6>
                                <p className="text-base text-gray-900">
                                {item.para}
                                </p>
                            </div>
                            ))}
                        </div>
                        <div>
                            <Image
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                                src={Digital}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Choose
import React from 'react'
import need1 from '/public/assets/services/DevOps/need1.jpg'
import need2 from '/public/assets/services/DevOps/need2.jpg'
import need3 from '/public/assets/services/DevOps/need3.jpg'
import Image from 'next/image'

const Needs = () => {

    const need = [
        {
            id: 1,
            title: "Accelerate Time-to-Market",
            para: "By automating manual tasks and streamlining workflows, we help you release new features and updates faster giving you a competitive edge.",
        },
        {
            id: 2,
            title: "Enhance Collaboration",
            para: "DevOps fosters a culture of collaboration between development, operations and quality assurance teams, breaking down silos and improving communication.",
        },
        {
            id: 3,
            title: "Increase Efficiency",
            para: "Our DevOps practices focus on optimizing your infrastructure, reducing downtime and improving resource utilization, ultimately saving you time and money.",
        },
    ]

    return (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-10">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Discover DevOps
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Unlock growth</span>
                    </span>{' '}
                    with our tailored solutions and support.
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    DevOps integrates development and operations teams to enhance collaboration, automate processes and accelerate software delivery, essential for staying competitive in today's fast-paced market. It enables your business to:
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="grid grid-cols-2 gap-5">
                    <Image
                        className="object-cover w-full h-44 col-span-2 rounded shadow-lg"
                        src={need1}
                        alt=""
                    />
                    <Image
                        className="object-cover w-full h-40 rounded shadow-lg"
                        src={need2}
                        alt=""
                    />
                    <Image
                        className="object-cover w-full h-40 rounded shadow-lg"
                        src={need3}
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center">
                    {need.map((item) => (
                        <div key={item.id} className="pb-4 mb-4 border-b">
                            <h6 className="mb-2 font-semibold leading-5">{item.title}</h6>
                            <p className="text-sm text-gray-900">{item.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Needs
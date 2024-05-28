import React from 'react'
import { AiOutlineSolution } from "react-icons/ai";
import { CgTime } from "react-icons/cg";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrUserExpert } from "react-icons/gr";

const Choose = () => {
    return (
        <section className="text-gray-800">
            <div className="container mx-auto flex flex-col p-6">
                <h2 className="py-4 text-3xl font-bold text-center">Why Partner with Us?</h2>
                <div className="divide-y divide-gray-700 dark:divide-gray-300">
                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <GrUserExpert className="w-16 h-16" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <span className="text-xl font-bold md:text-2xl">Industry Expertise:</span>
                            <span className="mt-4 text-gray-700">Our team understands the unique needs of the construction industry, providing solutions that are not only innovative but also practical and effective.</span>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <HiOutlineLightBulb className="w-16 h-16" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <span className="text-xl font-bold md:text-2xl">Customized Solutions:</span>
                            <span className="mt-4 text-gray-700">We tailor our IT services to fit your specific project requirements and business objectives, ensuring you get the most value from our technology.</span>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <AiOutlineSolution className="w-16 h-16" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <span className="text-xl font-bold md:text-2xl">Proven Track Record:</span>
                            <span className="mt-4 text-gray-700">With a history of successful projects and satisfied clients, we are a trusted partner for construction companies looking to leverage technology for growth and efficiency.</span>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <CgTime className="w-16 h-16" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <span className="text-xl font-bold md:text-2xl">24/7 Support:</span>
                            <span className="mt-4 text-gray-700">Our dedicated support team is always available to assist you, ensuring that your systems run smoothly and any issues are promptly resolved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Choose
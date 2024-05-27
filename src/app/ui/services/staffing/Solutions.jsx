import Image from 'next/image'
import React from 'react'
import need1 from '/public/assets/services/DevOps/need1.jpg'

const Solutions = () => {
    return (
        <section className="p-4 lg:p-12 bg-gray-100">
            <h2 className="mb-6 text-4xl font-bold leading-none text-center">Our IT Staffing Solutions</h2>
            <div className="mx-auto space-y-6">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <Image src={need1} alt="" width={"570"} height={"600"} className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-8 bg-white">
                        <h3 className="text-3xl font-bold">Contract Staffing</h3>
                        <ul>
                            <li className="my-6 dark:text-gray-600">Short-Term Assignments: Ideal for addressing temporary spikes in workload or specific project needs.</li>
                            <li className="my-6 dark:text-gray-600">Long-Term Contracts: Perfect for ongoing projects that require specialized skills over an extended period.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <Image src={need1} alt="" width={"570"} height={"600"} className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                        <h3 className="text-3xl font-bold">Contract-to-Hire Staffing</h3>
                        <ul>
                            <li className="my-6 dark:text-gray-600">Evaluate Before Committing: This model allows businesses to evaluate a candidate's performance and cultural fit before making a permanent hiring decision.</li>
                            <li className="my-6 dark:text-gray-600">Seamless Transition: Facilitates a smooth transition from contract to full-time employment if the candidate meets your expectations.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <Image src={need1} alt="" width={"570"} height={"600"} className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                        <h3 className="text-3xl font-bold">Direct Hire Staffing</h3>
                        <ul>
                            <li className="my-6 dark:text-gray-600">Permanent Placement: For organizations seeking to fill full-time positions, direct hire services ensure you get top-tier talent tailored to your long-term business objectives.</li>
                            <li className="my-6 dark:text-gray-600">Comprehensive Vetting: Rigorous screening and vetting processes to ensure candidates are well-qualified and align with your company's culture and values.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <Image src={need1} alt="" width={"570"} height={"600"} className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                        <h3 className="text-3xl font-bold">Managed Services</h3>
                        <ul>
                            <li className="my-6 dark:text-gray-600">End-to-End Solutions: Managed services provide complete project management, from initial planning to execution and support, utilizing a dedicated team of professionals.</li>
                            <li className="my-6 dark:text-gray-600">Focus on Core Business: Allows your in-house team to focus on strategic initiatives while we handle the technical aspects of your projects.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solutions
import Image from 'next/image'
import React from 'react'

const Benefits = () => {

    const benefit = [
        {
            id: 1,
            title: "Increased Efficiency",
            para: "By automating routine tasks and optimizing workflows, our IT solutions significantly boost operational efficiency, leading to higher productivity and lower operational costs.",
        },
        {
            id: 2,
            title: "Enhanced Decision-Making",
            para: "With access to real-time data and advanced analytics, manufacturers can make informed decisions quickly, improving overall business performance.",
        },
        {
            id: 3,
            title: "Scalability",
            para: "Our IT solutions are designed to grow with your business. Whether you are a small manufacturer or a large enterprise, our scalable solutions adapt to your changing needs.",
        },
        {
            id: 4,
            title: "Improved Quality Control",
            para: "Advanced monitoring and predictive analytics help in maintaining high-quality standards by identifying potential issues before they become critical problems.",
        },
        {
            id: 5,
            title: "Reduced Downtime",
            para: "Predictive maintenance and real-time monitoring minimize equipment downtime, ensuring continuous production and reducing maintenance costs.",
        },
        {
            id: 6,
            title: "Better Customer Satisfaction",
            para: "Streamlined operations and improved product quality lead to faster delivery times and higher customer satisfaction.",
        }
    ]

    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-6">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Benefits of Our IT Solutions
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Discover the key advantages of our innovative IT solutions, designed to boost efficiency, enhance decision-making and improve overall productivity in your manufacturing processes.
                </p>
            </div>
            <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
                {benefit.map((item) => (
                    <div key={item.id} className="duration-300 transform bg-white border-l-4 shadow-sm border-purple-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r">
                            <h6 className="mb-2 font-semibold leading-5">{item.title}</h6>
                            <p className="text-sm text-gray-900">{item.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Benefits
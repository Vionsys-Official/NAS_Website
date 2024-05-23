import React from 'react'

const features = () => {

    const feature = [
        {
            id: 1,
            title:"Customer Data Management",
            para: "Our CRM offers a centralized database for customer information, easy access to profiles and interaction records and advanced data security measures."
        },
        {
            id: 2,
            title:"Sales Management",
            para: "Our CRM includes sales pipeline tracking, automates routine sales tasks and provides real-time reporting and forecasting for sales."
        },
        {
            id: 3,
            title:"Marketing Automation",
            para: "Our CRM provides campaign management tools, seamless email marketing integration and robust analytics for measuring campaign effectiveness and customer engagement."
        },
        {
            id: 4,
            title:"Customer Service and Support",
            para: "Our CRM platform provides comprehensive helpdesk and ticketing systems, a knowledge base and performance tracking to deliver exceptional customer service and support."
        },
        {
            id: 5,
            title:"Analytics and Reporting",
            para: "Our CRM platform offers comprehensive dashboards, customizable reports and advanced predictive analytics for insightful performance tracking and trend identification."
        },
        {
            id: 6,
            title:"Mobile Access",
            para: "Our CRM platform offers mobile-friendly applications with synchronization across all devices, ensuring up-to-date information and offline access to essential functions for seamless on-the-go management."
        },
    ]

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="flex flex-col lg:flex-row">
      <div className="max-w-xl pr-10 mx-auto mb-10 w-1/4">
        <h5 className="mb-6 text-3xl font-extrabold">
          Key Features of Our CRM Services
        </h5>
        <p className="mb-6 text-gray-900">
        Our CRM services are expertly designed to enhance customer satisfaction, streamline operations and drive growth. With a comprehensive suite of tailored features, our platform meets diverse business needs across industries.
        </p>
      </div>
      <div className="grid gap-5 row-gap-5 sm:grid-cols-3 w-3/4">
        {feature.map((item) => (
            <div key={item.id} className="max-w-md">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-11 h-11 text-deep-purple-accent-400"
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
            <h6 className="mb-2 font-semibold leading-5">{item.title}</h6>
            <p className="text-sm text-gray-700">{item.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default features
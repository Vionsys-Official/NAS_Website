import React from 'react'

const ChooseUs = () => {

    const select = [
        {
            id: 1,
            title: 'Expertise and Experience',
            para: 'Our seasoned developers and IT professionals bring extensive industry knowledge, having successfully delivered numerous software solutions across various sectors.',
        },
        {
            id: 2,
            title: 'Custom Solutions Tailored to Your Needs',
            para: 'We provide bespoke software solutions tailored to your specific business goals, ensuring maximum value and ROI.',
        },
        {
            id: 3,
            title: 'Cutting-Edge Technologies',
            para: 'We leverage the latest technologies like AI, machine learning, blockchain, and cloud computing to build innovative and efficient solutions.',
        },
        {
            id: 4,
            title: 'Agile Development Methodology',
            para: 'Our agile process promotes flexibility, transparency, and collaboration, delivering high-quality software on time and within budget.',
        },
        {
            id: 5,
            title: 'Rigorous Quality Assurance',
            para: ' We employ comprehensive testing and QA processes to ensure reliable, secure, and seamless software performance.',
        },
        {
            id: 6,
            title: 'End-to-End Service',
            para: 'We offer a complete range of services from consultation to support, managing all aspects of software development.',
        },
        {
            id: 7,
            title: 'Client-Centric Approach',
            para: 'We prioritize exceptional customer service and clear communication, focusing on long-term partnerships and client satisfaction.',
        },
        {
            id: 8,
            title: 'Scalable and Future-Proof Solutions',
            para: 'Our solutions are designed to scale and adapt to evolving business needs, ensuring competitiveness and future growth.',
        },
        {
            id: 9,
            title: 'Proven Track Record',
            para: 'Our portfolio of successful projects and client testimonials highlights our ability to deliver exceptional results.',
        },
    ]
  return (
    <div className="px-4 pt-28 pb-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-50 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Why</span>
          </span>{' '}
          Choose Us for Your Software Development Needs?
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We understand that choosing the right partner for software development is crucial to your business success. Here are compelling reasons:
        </p>
      </div>
      <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
        {select.map ((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
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
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">{item.title}</h6>
              <p className="mb-3 text-sm text-gray-900">
              {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChooseUs;
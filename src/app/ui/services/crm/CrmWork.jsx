import React from 'react'

const CrmWork = () => {

    const work = [
        {
            id: 1,
            num: "1",
            title: "Initial Consultation and Assessment",
            para: "We conduct an in-depth consultation to understand your business objectives, challenges and CRM requirements, assessing processes and data needs.",
        },
        {
            id: 2,
            num: "2",
            title: "Customization and Configuration",
            para: "Based on the consultation, we tailor a CRM solution to your goals, configuring the system to match requirements such as data fields, permissions etc.",
        },
        {
            id: 3,
            num: "3",
            title: "Data Migration and Integration",
            para: "We assist in migrating your customer data securely, ensuring accuracy through field mapping and rigorous testing for data integrity.",
        },
        {
            id: 4,
            num: "4",
            title: "User Training and Adoption",
            para: "We provide comprehensive training sessions for your team, covering key functionalities and best practices for maximizing productivity.",
        },
        {
            id: 5,
            num: "5",
            title: "Implementation and Deployment",
            para: "After completing customization, migration and training, we roll out the CRM system across your organization, ensuring a smooth deployment process.",
        },
        {
            id: 6,
            num: "6",
            title: "Ongoing Support and Maintenance",
            para: "We offer continuous support and maintenance services, addressing issues and providing guidance as your business evolves.",
        },
        {
            id: 7,
            num: "7",
            title: "Optimization and Continuous Improvement",
            para: "We collaborate with your team to optimize the CRM system based on feedback and evolving business needs, driving maximum value.",
        },
    ]

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            NAS Infotech Pvt. Ltd.
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
                  id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">How</span>
          </span>{' '}
          Our CRM Solutions Work
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Implementing a CRM system with us is a straightforward and seamless process designed to optimize your customer relationship management and drive business growth. Here’s how it works:
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
        {work.map ((item) => (
            <div key={item.id} className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-purple-600  hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-400">
              {item.num}
              </p>
              <p className="text-lg font-bold leading-5">{item.title}</p>
            </div>
            <p className="text-sm text-gray-900">
            {item.para}
            </p>
          </div>
        ))}

        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-purple-400 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-purple-400">
              8
            </p>
            <p className="text-lg font-bold leading-5">Performance Monitoring and Reporting</p>
          </div>
          <p className="text-sm text-gray-900">
          We implement robust analytics tools to monitor CRM performance and track key metrics, enabling data-driven decision-making.
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-purple-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CrmWork
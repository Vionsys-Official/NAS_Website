import React from 'react'
import DevOps from '/public/assets/services/DevOps/DevOps.jpeg'
import Image from 'next/image'

const Process = () => {

    const process = [
        {
            id: 1,
            title: "Plan",
            para: "Collaborate to define requirements, prioritize tasks and set objectives."
        },
        {
            id: 2,
            title: "Code",
            para: "Develop using version control systems like Git."
        },
        {
            id: 3,
            title: "Build",
            para: "Compile and test with Continuous Integration tools to ensure quality."
        },
        {
            id: 4,
            title: "Test",
            para: "Validate with automated unit, integration and acceptance tests."
        },
        {
            id: 5,
            title: "Deploy",
            para: "Automate deployments to staging/production with Continuous Deployment."
        },
        {
            id: 6,
            title: "Operate",
            para: "Monitor applications and infrastructure in real-time, analyze logs and metrics."
        },
        {
            id: 7,
            title: "Monitor",
            para: "Use tools to track performance, diagnose issues and optimize reliability."
        },
        {
            id: 8,
            title: "Iterate",
            para: "Continuously deploy changes, gather feedback and improve."
        },
    ]

  return (
    <div className="px-4 py-8 mx-auto w-full">
        <div className='py-8 font-sans text-3xl font-bold text-gray-900 text-center'>
            <h1>Our Workflow</h1>
        </div>
    <div className="grid gap-8 row-gap-10 lg:grid-cols-2 px-10">
      <div className="lg:py-6 lg:pr-10">
        {process.map((item) => (
            <div key={item.key} className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-8 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-4">
              <p className=" text-lg font-bold">{item.title}</p>
              <p className="text-gray-700">
              {item.para}
              </p>
            </div>
          </div>
        ))}
        
        {/* <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div>
              <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  className="w-4 text-gray-600"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="12"
                    y1="2"
                    x2="12"
                    y2="22"
                  />
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="19,15 12,22 5,15"
                  />
                </svg>
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-lg font-bold">Step 2</p>
            <p className="text-gray-700">
              The first mate and his Skipper too will do their very best to
              make the others comfortable in their tropic island nest. Michael
              Knight a young loner.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div>
              <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  className="w-4 text-gray-600"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="12"
                    y1="2"
                    x2="12"
                    y2="22"
                  />
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="19,15 12,22 5,15"
                  />
                </svg>
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-lg font-bold">Step 3</p>
            <p className="text-gray-700">
              Tell them I hate them. Is the Space Pope reptilian!? Tell her
              she looks thin. Hello, little man. I will destroy you!
            </p>
          </div>
        </div> */}
        {/* <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div>
              <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  className="w-4 text-gray-600"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="12"
                    y1="2"
                    x2="12"
                    y2="22"
                  />
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="19,15 12,22 5,15"
                  />
                </svg>
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-lg font-bold">Step 4</p>
            <p className="text-gray-700">
              If one examines precultural libertarianism, one is faced with a
              choice: either accept rationalism or conclude that context is a
              product.
            </p>
          </div>
        </div> */}
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div>
              <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  className="w-6 text-gray-600"
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
              </div>
            </div>
          </div>
          <div className="pt-1">
            <p className="mb-2 text-lg font-bold">Success</p>
            <p className="text-gray-700" />
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
          src={DevOps}
          alt=""
        />
      </div>
    </div>
  </div>
  )
}

export default Process
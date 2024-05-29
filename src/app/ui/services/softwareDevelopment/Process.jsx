import React from 'react'

const Process = () => {

    const process = [
        {
            id: 1,
            title: "Consultation and Analysis",
            para: "1",
            description: "We start with an in-depth consultation to understand your business requirements, objectives and challenges."
        },
        {
            id: 2,
            title: "Solution Design",
            para: "2",
            description: "Oue experts design a detailed blueprint and architecture for the proposed solution, ensuring it meets all your needs."
        },
        {
            id: 3,
            title: "Development",
            para: "3",
            description: "Using agile methodologies, we develop the software with continuous feedback and iterative improvements."
        },
        {
            id: 4,
            title: "Testing and QA",
            para: "4",
            description: "Rigorous testing ensures the software is reliable, secure and performs optimally."
        },
        {
            id: 5,
            title: "Deployment",
            para: "5",
            description: "We ensure seamless deployment and integration with your existing systems."
        },
        {
            id: 6,
            title: "Support and Maintenance",
            para: "6",
            description: " Our ongoing support and maintenance services ensure your software remains updated and performs optimally."
        },

    ]
    return (
        <div className='py-4'>
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                <h1 className='md:text-Heading text-Heading-sm font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none leading-10 text-center'>Our Process</h1>
                <p className="text-base text-gray-800 md:text-lg py-4">We ensure seamless software development from start to finish, guaranteeing your success at every stage.</p>
            </div>

            <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2 py-4 px-16">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
        </div>
        {process.map((item) => (
        <div key={item.id} className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">{item.title}</p>
            <p className="flex items-center justify-center w-8 h-8 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
            {item.para}
            </p>
          </div>
          <p className="text-sm text-gray-900">
          {item.description}
          </p>
        </div>
        ))}
      </div>

    </div>
        

    )
}

export default Process
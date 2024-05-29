import React from 'react'

const Service = () => {

    const service = [
        {
            id: 1,
            title: "Project Management Software:",
            para1: "Streamline project planning, scheduling, and execution.",
            para2: "Enhance resource allocation and tracking.",
            para3: "Integrate seamlessly with existing tools and workflows.",
        },
        {
            id: 2,
            title: "Building Information Modeling (BIM):",
            para1: "Implement advanced 3D modeling for detailed project visualization.",
            para2: "Improve design accuracy and coordination.",
            para3: "Facilitate better decision-making with real-time data.",
        },
        {
            id: 3,
            title: "Cloud-Based Collaboration Tools:",
            para1: "Enable real-time collaboration between on-site and off-site teams.",
            para2: "Securely share documents, plans, and updates.",
            para3: "Ensure everyone has access to the latest project information.",
        },
        {
            id: 4,
            title: "IoT and Smart Construction:",
            para1: "Integrate IoT devices to monitor equipment and site conditions.",
            para2: "Enhance safety with real-time data and alerts.",
            para3: "Optimize asset management and maintenance.",
        },
        {
            id: 5,
            title: "Mobile Solutions:",
            para1: "Equip your workforce with mobile apps for on-the-go access to project data.",
            para2: "Simplify field reporting and inspections.",
            para3: "Improve communication and reduce delays.",
        },
        {
            id: 6,
            title: "Data Analytics and Reporting:",
            para1: "Harness the power of data to gain insights into project performance.",
            para2: "Predict and mitigate risks with advanced analytics.",
            para3: "Generate comprehensive reports for stakeholders.",
        },
        {
            id: 7,
            title: "Cybersecurity Services:",
            para1: "Protect sensitive project data with robust security measures.",
            para2: "Ensure compliance with industry standards and regulations.",
            para3: "Safeguard against cyber threats and data breaches.",
        },
    ]

    return (
        <>
            <section className="m-4 md:m-8 text-gray-800">
                <div className="mx-auto my-6 space-y-1 text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Our IT Solutions for Construction</h2>
                </div>
                <div className="grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
                    {service.map((item) => (
                        <div key={item.id} className="flex flex-col px-5 py-3 border-2 border-purple-600 rounded-bl-3xl rounded-tr-3xl">
                        <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-800">{item.title}</h2>
                        <p className="flex-1 mb-1 text-base leading-relaxed text-gray-600">{item.para1}</p>
                        <p className="flex-1 mb-1 text-base leading-relaxed text-gray-600">{item.para2}</p>
                        <p className="flex-1 mb-1 text-base leading-relaxed text-gray-600">{item.para3}</p>
                    </div>
                    ))}
                    
                </div>
            </section>
        </>

    )
}

export default Service
import React from 'react'

const OtherInfor = () => {
    return (
        <div className='py-10'>
            <div className='py-5'>
                <h2 className="max-w-6xl mx-auto text-center md:text-4xl font-bold tracking-tight text-black text-2xl sm:leading-none">Integrated Solutions for Technological Innovation, Regulatory Compliance, and Customization in Pharmaceuticals.</h2>
            </div>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <img
                                src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        <div className="py-5">
                                <p className="mb-3 text-2xl font-bold leading-5">Technological Innovation</p>
                            <p className="text-gray-700">
                            At the forefront of technological advancements, we aim to revolutionize the pharmaceutical sector. Our plans include developing predictive analytics for adverse drug reactions, integrating IoT devices for real-time patient monitoring, and leveraging cloud computing for scalable research collaboration.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <img
                                src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        <div className="py-5">
                                <p className="mb-3 text-2xl font-bold leading-5">Regulatory Compliance</p>
                            <p className="text-gray-700">
                            Our solutions are designed with compliance and security at their core. We employ state-of-the-art encryption, regular security audits, and stringent access controls to protect your sensitive data. Our systems are continuously updated to adhere to the latest regulatory standards, ensuring your peace of mind.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <img
                                src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        <div className="py-5">
                                <p className="mb-3 text-2xl font-bold leading-5">
                                Customization in Pharma
                                </p>
                            <p className="text-gray-700">
                            We understand that every pharmaceutical company has unique needs. Our solutions are highly customizable and can be seamlessly integrated with your existing systems and workflows. Whether you need bespoke software development or integration with third-party applications, we have the expertise to deliver.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherInfor
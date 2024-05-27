import Image from 'next/image'
import React from 'react'
import need1 from '/public/assets/services/DevOps/need1.jpg'


const Benefit = () => {

    return (
        <div className='py-16'>
            <h1 className="text-3xl font-bold py-4 text-center">Benefits of Partnering with Us</h1>
                <div className='flex flex-row justify-evenly'>
                    <div className="max-w-xs bg-white border rounded-lg shadowborder-gray-700">
                        <Image className="rounded-t-lg" src={need1} alt="" width={'400'} height={"400"} />
                        <div className="p-3">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Expertise</h5>
                            <p className="font-normal text-gray-700">Our deep industry knowledge and technical expertise enable us to find the best talent for your needs.</p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-white border rounded-lg shadowborder-gray-700">
                        <Image className="rounded-t-lg" src={need1} alt="" width={'400'} height={"400"} />
                        <div className="p-3">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Customization</h5>
                            <p className="font-normal text-gray-700">Tailored staffing solutions to fit your specific project and business requirements.</p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-white border rounded-lg shadowborder-gray-700">
                        <Image className="rounded-t-lg" src={need1} alt="" width={'400'} height={"400"} />
                        <div className="p-3">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Quality Assurance</h5>
                            <p className="font-normal text-gray-700">Commitment to delivering high-quality service and ensuring our client satisfaction.</p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-white border rounded-lg shadowborder-gray-700">
                        <Image className="rounded-t-lg" src={need1} alt="" width={'400'} height={"400"} />
                        <div className="p-3">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Innovation</h5>
                            <p className="font-normal text-gray-700">Continuous adaptation to the latest trends and technologies to provide cutting-edge staffing solutions.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Benefit
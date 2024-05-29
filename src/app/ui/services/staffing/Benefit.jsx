import Image from 'next/image'
import React from 'react'
import Customization from '/public/assets/services/ItStaffing/Customization.jpg'
import Expertise from '/public/assets/services/ItStaffing/Expertise.jpg'
import Innovation from '/public/assets/services/ItStaffing/Innovation.jpg'
import Result from '/public/assets/services/ItStaffing/Result.jpeg'


const Benefit = () => {

    return (
        <div className='py-16'>
            <h1 className="md:text-Heading text-Heading-sm font-bold py-4 text-center">Benefits of Partnering with Us</h1>
                <div className='flex md:flex-row flex-col md:justify-evenly gap-4 md:py-0 px-2'>
                    <div className="max-w-xs bg-white border rounded-lg shadowborder-gray-700">
                        <Image className="rounded-t-lg" src={Expertise} alt="" width={'400'} height={"400"} />
                        <div className="p-3">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 md:text-CardHeading text-CardHeading-sm">Expertise</h5>
                            <p className="font-normal text-gray-800 md:text-Para text-Para-sm">Our deep industry knowledge and technical expertise enable us to find the best talent for your needs.</p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-white border-2 rounded-lg shadowborder-gray-700">
                        <Image className="rounded-t-lg" src={Customization} alt="" width={'400'} height={"400"} />
                        <div className="p-3">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 md:text-CardHeading text-CardHeading-sm">Customization</h5>
                            <p className="font-normal text-gray-800 md:text-Para text-Para-sm">Tailored staffing solutions to fit your specific project and business requirements.</p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-white border rounded-lg shadowborder-gray-700">
                        <Image className="rounded-t-lg" src={Result} alt="" width={'400'} height={"400"} />
                        <div className="p-3">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 md:text-CardHeading text-CardHeading-sm">Quality Assurance</h5>
                            <p className="font-normal text-gray-800 md:text-Para text-Para-sm">Commitment to delivering high-quality service and ensuring our client satisfaction.</p>
                        </div>
                    </div>
                    <div className="max-w-xs bg-white border rounded-lg shadowborder-gray-700">
                        <Image className="rounded-t-lg" src={Innovation} alt="" width={'400'} height={"400"} />
                        <div className="p-3">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 md:text-CardHeading text-CardHeading-sm">Innovation</h5>
                            <p className="font-normal text-gray-800 md:text-Para text-Para-sm">Continuous adaptation to the latest trends and technologies to provide cutting-edge staffing solutions.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Benefit
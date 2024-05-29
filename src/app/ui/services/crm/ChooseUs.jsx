import Image from 'next/image'
import React from 'react'
import Result from '/public/assets/services/Crm/Result.jpeg'
import Customization from '/public/assets/services/Crm/Customization.jpg'
import Expertise from '/public/assets/services/Crm/Expertise.jpg'
import Support from '/public/assets/services/Crm/Support.jpg'

const ChooseUs = () => {
  return (
    <section className="">
    <div className="md:px-6 px-2 md:py-14 py-8 mx-auto"> 
    {/* animate-pulse */}
    <div className="max-w-xl md:pr-10 mx-auto md:mb-10 mb-5 md:w-1/4">
        <h5 className="md:text-Heading text-Heading-sm font-bold text-center">
          Why Choose NAS?
        </h5> 
      </div>

        <div className="grid grid-cols-1 md:gap-8 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col items-center p-4 border-2 border-slate-500 rounded-lg">
                <Image className='w-32 h-32 rounded-full' src={Expertise} alt=''/>
                <h1 className="mx-auto md:mt-6 mt-1 font-bold md:text-CardHeading text-CardHeading-sm">Expertise</h1>
                <p className="mx-auto mt-4 text-center md:text-base text-sm">Our team of CRM experts has extensive experience in implementing & managing solutions across various industries.</p>
            </div>

            <div className="flex flex-col items-center p-4 border-2 border-slate-500 rounded-lg">
                <Image className='w-32 h-32 rounded-full' src={Customization} alt=''/>
                <h1 className="mx-auto md:mt-6 mt-1 font-bold md:text-CardHeading text-CardHeading-sm">Customization</h1>
                <p className="mx-auto mt-4 text-center md:text-base text-sm">We tailor our CRM solutions to fit your specific business requirements, ensuring maximum efficiency and effectiveness.</p>
            </div>

            
            <div className="flex flex-col items-center p-4 border-2 border-slate-500 rounded-lg">
                <Image className='w-32 h-32 rounded-full' src={Support} alt=''/>
                <h1 className="mx-auto md:mt-6 mt-1 font-bold md:text-CardHeading text-CardHeading-sm">Support</h1>
                <p className="mx-auto mt-4 text-center md:text-base text-sm">We provide dedicated support and training to ensure your team can leverage the CRM system to its full potential.</p>
            </div>
            

            <div className="flex flex-col items-center p-4 border-2 border-slate-500 rounded-lg">
                <Image className='w-32 h-32 rounded-full' src={Result} alt=''/>
                <h1 className="mx-auto md:mt-6 mt-1 font-bold md:text-CardHeading text-CardHeading-sm">Proven Results</h1>
                <p className="mx-auto mt-4 text-center md:text-base text-sm">Our clients have significantly improved customer engagement, sales and growth through our CRM solutions.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default ChooseUs
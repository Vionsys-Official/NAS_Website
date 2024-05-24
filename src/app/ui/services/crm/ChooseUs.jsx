import Image from 'next/image'
import React from 'react'
import Result from '/public/assets/services/Crm/Result.jpeg'
import Customization from '/public/assets/services/Crm/Customization.jpg'
import Expertise from '/public/assets/services/Crm/Expertise.jpg'
import Support from '/public/assets/services/Crm/Support.jpg'

const ChooseUs = () => {
  return (
    <section className="bg-white">
    <div className="px-6 py-14 mx-auto"> 
    {/* animate-pulse */}
    <div className="max-w-xl pr-10 mx-auto mb-10 w-1/4">
        <h5 className="text-3xl font-extrabold">
          Why Choose NAS?
        </h5>
      </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col items-center p-4 border-2 border-slate-500 rounded-lg">
                <Image className='w-32 h-32 rounded-full' src={Expertise} alt=''/>
                <h1 className="mx-auto mt-6 font-bold text-xl">Expertise</h1>
                <p className="mx-auto mt-4 text-center">Our team of CRM experts has extensive experience in implementing & managing solutions across various industries.</p>
            </div>

            <div className="flex flex-col items-center p-4 border-2 border-slate-500 rounded-lg">
                <Image className='w-32 h-32 rounded-full' src={Customization} alt=''/>
                <h1 className="mx-auto mt-6 font-bold text-xl">Customization</h1>
                <p className="mx-auto mt-4 text-center">We tailor our CRM solutions to fit your specific business requirements, ensuring maximum efficiency and effectiveness.</p>
            </div>

            
            <div className="flex flex-col items-center p-4 border-2 border-slate-500 rounded-lg">
                <Image className='w-32 h-32 rounded-full' src={Support} alt=''/>
                <h1 className="mx-auto mt-6 font-bold text-xl">Support</h1>
                <p className="mx-auto mt-4 text-center">We provide dedicated support and training to ensure your team can leverage the CRM system to its full potential.</p>
            </div>
            

            <div className="flex flex-col items-center p-4 border-2 border-slate-500 rounded-lg">
                <Image className='w-32 h-32 rounded-full' src={Result} alt=''/>
                <h1 className="mx-auto mt-6 font-bold text-xl">Proven Results</h1>
                <p className="mx-auto mt-4 text-center">Our clients have significantly improved customer engagement, sales and growth through our CRM solutions.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default ChooseUs
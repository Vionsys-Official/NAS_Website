import React from 'react'
import { HiLightningBolt } from "react-icons/hi";
import Simplify from'/public/assets/industries/Ecommerce/simplify.jpg';
import dellight from'/public/assets/industries/Ecommerce/delight.jpg';
import audience from'/public/assets/industries/Ecommerce/audience.jpg';
import safe from'/public/assets/industries/Ecommerce/safe.jpg';
import grow from'/public/assets/industries/Ecommerce/grow.jpg';
import Image from 'next/image';

const Service = () => {

    const service=[
        {
            id:1,
            image:Simplify,
            title:"Simplify Your Operations",
            desc:"We take the hassle out of managing your online store. Our software automates tasks like inventory management and order processing, so you can focus on growing your business."
        },
        {
            id:2,
            image:dellight,
            title:"Delight Your Customers",
            desc:"Happy customers are loyal customers. Our user-friendly platforms make shopping a breeze, leading to more sales and repeat business."
        },
        {
            id:3,
            image:audience,
            title:"Understand Your Audience",
            desc:"Knowledge is power. Our analytics tools give you insights into your customers' behavior, helping you tailor your marketing efforts and boost your sales."
        },
        {
            id:4,
            image:safe,
            title:"Stay Safe and Secure",
            desc:"Protecting your business is our priority. Our software comes with top-notch security features to keep your data safe from cyber threats."
        },
        {
            id:5,
            image:grow,
            title:"Grow Without Limits",
            desc:"As your business grows, our software grows with you. Our scalable solutions ensure that you can handle increased traffic and transactions without missing a beat."
        },
        {
            id:6,
            image:Simplify,
            title:"Seamlessly Integrated",
            desc:"No need to start from scratch. Our software seamlessly integrates with popular e-commerce platforms, making implementation a breeze."
        },
        {
            id:7,
            image:Simplify,
            title:"Tailored Just for You",
            desc:"We understand that every business is different. That's why we offer personalized solutions that cater to your unique needs and goals."
        },
        {
            id:8,
            image:Simplify,
            title:"Support Around the Clock",
            desc:"Your business doesn't sleep, and neither do we. Our dedicated support team is here 24/7 to help you with any issues or questions you may have."
        },
    ]

  return (
    <div className='flex flex-col items-center justify-center ml-24 py-16'>
        <div className='w-[80%] flex flex-col items-center justify-center text-center py-6'>
        <h2 className="mb-6 font-sans text-MainHeading-sm md:text-MainHeading leading-none tracking-tight text-gray-900 ">
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
                <span className="relative">Here's</span>
            </span>{' '}
            how we can help
            </h2>
            <h2 className='text-CardHeading-sm md:text-CardHeading'>Welcome to our e-commerce hub, where technology meets success. Our software solutions are designed to make running an online business simpler, smoother, and more profitable. </h2>
        </div>
        <div className='w-[80%]'>
            <div className='grid grid-cols-3 gap-4 items-start justify-center'>
                
                {service.map((feat)=>{
                    return(
                        <div key={feat.id} className='flex flex-col p-4 '>
                            <div className='w-full h-[10rem] '>
                                <Image className='object-cover w-full h-full rounded-xl' src={feat.image} alt=''></Image>
                            </div>
                            {/* <div className='flex items-start justify-center text-CardHeading-sm md:text-CardHeading pt-1'><HiLightningBolt/></div> */}
                            <div className='flex flex-col'>
                                <h2 className='text-CardHeading-sm md:text-CardHeading font-bold'>{feat.title}</h2>
                                <p className='text-Para-sm md:text-Para'>{feat.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default Service;

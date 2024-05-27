import React from 'react'
import Cloud from "/public/assets/services/CloudComputing/Cloud.jpeg"
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
        <div className="relative">
          <Image src={Cloud} alt='' className="inset-0 object-cover w-full h-full" />
          <div className="absolute inset-y-0 right-0 w-1/2 flex flex-col justify-center items-center">
            <h1 className='text-white text-5xl font-bold mb-6 text-center'>Welcome to NAS Cloud Computing Services</h1>
            <h3 className='text-white text-xl font-semibold mb-6 text-center'>Empowering Your Business with Cutting-Edge Cloud Computing</h3>
            <p className='text-white text-base text-justify p-5'>we offer state-of-the-art cloud computing solutions designed to elevate your business. Our secure, scalable and reliable services help you innovate, reduce costs and improve efficiency. From startups to enterprises, we tailor our offerings to meet your unique needs. Discover the future of computing with NAS.</p>
          </div>
        </div>
    </div>
  )
}

export default Hero;
import Choose from '@/app/ui/industries/DigitalTransformation/Choose'
import Hero from '@/app/ui/industries/DigitalTransformation/Hero'
import Service from '@/app/ui/industries/DigitalTransformation/Service'
import React from 'react'

export const metadata = {
  title: "IT Digital Transformation",
};

const page = () => {
  return (
    <div>
      <Hero />
      <Choose />
      <Service />
    </div>
  )
}

export default page
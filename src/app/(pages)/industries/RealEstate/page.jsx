import ChooseUs from '@/app/ui/industries/RealEstate/ChooseUs'
import Hero from '@/app/ui/industries/RealEstate/Hero'
import Service from '@/app/ui/industries/RealEstate/Service'
import React from 'react'

export const metadata = {
  title: "Real Estate Industries",
};

const page = () => {
  return (
    <div>
      <Hero />
      <Service />
      <ChooseUs />
    </div>
  )
}

export default page
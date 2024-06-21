import Hero from '@/app/ui/industries/Pharma/Hero'
import OtherInfor from '@/app/ui/industries/Pharma/OtherInfor'
import Service from '@/app/ui/industries/Pharma/Service'
import React from 'react'

export const metadata = {
  title: "Pharma",
};

const page = () => {
  return (
    <div>
      <Hero />
      <OtherInfor />
      <Service />
    </div>
  )
}

export default page
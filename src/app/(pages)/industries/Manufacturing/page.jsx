import Benefits from '@/app/ui/industries/Manufacturing/Benefits'
import Hero from '@/app/ui/industries/Manufacturing/Hero'
import ImgManu from '@/app/ui/industries/Manufacturing/ImgManu'
import Services from '@/app/ui/industries/Manufacturing/Services'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <ImgManu/>
        <Benefits/>
    </div>
  )
}

export default page
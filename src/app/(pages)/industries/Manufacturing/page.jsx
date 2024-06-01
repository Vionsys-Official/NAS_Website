import Benefits from '@/app/ui/industries/Manufacturing/Benefits'
import Hero from '@/app/ui/industries/Manufacturing/Hero'
import ImgManu from '@/app/ui/industries/Manufacturing/ImgManu'
import Services from '@/app/ui/industries/Manufacturing/Services'
import React from 'react'

export const metadata = {
  title: "Manufacturing Industries",
};

const page = () => {
  return (
    <div id='mission'>
        <Hero/>
        <Services/>
        <ImgManu/>
        <Benefits/>
    </div>
  )
}

export default page
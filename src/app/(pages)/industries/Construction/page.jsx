import Choose from '@/app/ui/industries/Construction/Choose'
import Hero from '@/app/ui/industries/Construction/Hero'
import Service from '@/app/ui/industries/Construction/Service'
import React from 'react'

export const metadata = {
  title: "Construction",
};

const page = () => {
  return (
    <div id='mission'>
        <Hero/>
        <Service/>
        <Choose/>
    </div>
  )
}

export default page
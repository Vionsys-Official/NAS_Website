import Hero from '@/app/ui/industries/Transportation/Hero'
import Sections from '@/app/ui/industries/Transportation/Sections'
import React from 'react'

export const metadata = {
  title: "Transportation",
};

const page = () => {
  return (
    <main id='mission' className='overflow-x-hidden'>
      <Hero/>
      <Sections/>
    </main>
  )
}

export default page

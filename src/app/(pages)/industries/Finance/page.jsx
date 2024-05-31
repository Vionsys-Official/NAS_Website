import Hero from '@/app/ui/industries/Finance/Hero'
import Sections from '@/app/ui/industries/Finance/Sections'
import React from 'react'

export const metadata = {
  title: "Finance",
};

const page = () => {
  return (
    <main id='mission'>
      <Hero/>
      <Sections/>
    </main>
  )
}

export default page

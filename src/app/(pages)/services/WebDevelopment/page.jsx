import React from 'react'
import Services from '@/app/ui/services/webDevelopment/Services'
import Whychooseus from '@/app/ui/services/webDevelopment/Whychooseus'
import Faq from '@/app/ui/services/webDevelopment/faq'
import Cta from '@/app/ui/services/webDevelopment/cta'
import Process from '@/app/ui/services/webDevelopment/Process'
import Hero from '@/app/ui/services/webDevelopment/hero'


export const metadata = {
  title: "Web Development Services",
};


const page = () => {
  return (
    <div className='overflow-hidden font-light'>
      <Hero />
      <Services />
      <Whychooseus />
      <Process />
      <Faq />
      <Cta />
    </div>
  )
}

export default page
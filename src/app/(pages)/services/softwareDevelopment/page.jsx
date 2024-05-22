import ChooseUs from '@/app/ui/services/softwareDevelopment/ChooseUs'
import GetStart from '@/app/ui/services/softwareDevelopment/GetStart'
import Hero from '@/app/ui/services/softwareDevelopment/Hero'
import Process from '@/app/ui/services/softwareDevelopment/Process'
import Services from '@/app/ui/services/softwareDevelopment/Services'
import FaqSoftDev from '@/app/ui/services/softwareDevelopment/faq'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <Process/>
        <Services/>
        <ChooseUs/>
        <FaqSoftDev/>
        <GetStart/>
    </div>
  )
}

export default page
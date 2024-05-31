import ChooseUs from '@/app/ui/services/softwareDevelopment/ChooseUs'
import SoftStart from '@/app/ui/services/softwareDevelopment/SoftStart' 
import Hero from '@/app/ui/services/softwareDevelopment/Hero'
import Process from '@/app/ui/services/softwareDevelopment/Process'
import Services from '@/app/ui/services/softwareDevelopment/Services'
import React from 'react'
import SoftFaq1 from '@/app/ui/services/softwareDevelopment/SoftFaq1'

const page = () => {
  return (
    <div id='mission'>
        <Hero/>
        <Process/>
        <Services/>
        <ChooseUs/>
        <SoftFaq1/>
        <SoftStart/>
    </div>
  )
}

export default page
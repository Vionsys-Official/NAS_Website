import Benefit from '@/app/ui/services/staffing/Benefit'
import ChooseUs from '@/app/ui/services/staffing/ChooseUs'
import Hero from '@/app/ui/services/staffing/Hero'
import Process from '@/app/ui/services/staffing/Process'
import Serve from '@/app/ui/services/staffing/Serve'
import Solutions from '@/app/ui/services/staffing/Solutions'
import StaffingFaq from '@/app/ui/services/staffing/StaffingFaq'
import StaffingStart from '@/app/ui/services/staffing/StaffingStart'
import React from 'react'

const page = () => {
  return (
    <div id='mission'>
        <Hero/>
        <Solutions/>
        <Serve/>
        <Process/>
        <Benefit/>
        <ChooseUs/>
        <StaffingFaq/>
        <StaffingStart/>
    </div>
  )
}

export default page
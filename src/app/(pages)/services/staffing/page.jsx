import Hero from '@/app/ui/services/staffing/Hero'
import Serve from '@/app/ui/services/staffing/Serve'
import Solutions from '@/app/ui/services/staffing/Solutions'
import StaffingFaq from '@/app/ui/services/staffing/StaffingFaq'
import StaffingStart from '@/app/ui/services/staffing/StaffingStart'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <Serve/>
        <Solutions/>
        <StaffingFaq/>
        <StaffingStart/>
    </div>
  )
}

export default page
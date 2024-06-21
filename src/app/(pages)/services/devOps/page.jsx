import DevOpsFaq from '@/app/ui/services/devOps/DevOpsFaq'
import DevStart from '@/app/ui/services/devOps/DevStart'
import Hero from '@/app/ui/services/devOps/Hero'
import Needs from '@/app/ui/services/devOps/Needs'
import OurService from '@/app/ui/services/devOps/OurService'
import Process from '@/app/ui/services/devOps/Process'
import React from 'react'

export const metadata = {
  title: "DevOps Consulting and Solutions",
};


const page = () => {
  return (
    <div>
        <Hero/>
        <Needs/>
        <OurService/>
        <Process/>
        <DevOpsFaq/>
        <DevStart/>
    </div>
  )
}

export default page
import Choose from '@/app/ui/services/cloudComputing/Choose'
import CloudFaq from '@/app/ui/services/cloudComputing/CloudFaq'
import CloudStart from '@/app/ui/services/cloudComputing/CloudStart'
import Hero from '@/app/ui/services/cloudComputing/Hero'
import Industries from '@/app/ui/services/cloudComputing/Industries'
import OurService from '@/app/ui/services/cloudComputing/OurService'
import React from 'react'

export const metadata = {
  title: "Cloud Computing Services",
};


const page = () => {
  return (
    <div id='mission'>
        <Hero/>
        <OurService/>
        <Industries/>
        <Choose/>
        <CloudFaq/>
        <CloudStart/>
    </div>
  )
}

export default page
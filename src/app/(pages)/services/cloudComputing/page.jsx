import CloudFaq from '@/app/ui/services/cloudComputing/CloudFaq'
import CloudStart from '@/app/ui/services/cloudComputing/CloudStart'
import Hero from '@/app/ui/services/cloudComputing/Hero'
import OurService from '@/app/ui/services/cloudComputing/OurService'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <OurService/>
        <CloudFaq/>
        <CloudStart/>
    </div>
  )
}

export default page
import Sectionlast from '@/app/ui/about/sectionlast'
import SectionOne from '@/app/ui/industries/teleCommunication/sectionOne'
import SectionThree from '@/app/ui/industries/teleCommunication/sectionThree'
import SectioonTwo from '@/app/ui/industries/teleCommunication/sectioonTwo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <main id='mission' className=''>

     <SectionOne/>
     
     <SectioonTwo/>

     <SectionThree/> 

     <Sectionlast/>

    </main>
  )
}

export default page
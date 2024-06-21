import Sectionlast from '@/app/ui/about/sectionlast'
import SectionOne from '@/app/ui/industries/teleCommunication/sectionOne'
import SectionThree from '@/app/ui/industries/teleCommunication/sectionThree'
import SectioonTwo from '@/app/ui/industries/teleCommunication/sectioonTwo'
import React from 'react'

export const metadata = {
  title: "Telecom Industry",
};

const page = () => {
  return (
    <main className=''>

      <SectionOne />

      <SectioonTwo />

      <SectionThree />

      <Sectionlast />

    </main>
  )
}

export default page
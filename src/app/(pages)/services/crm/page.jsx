import Hero from '@/app/ui/services/crm/Hero'
import Features from '@/app/ui/services/crm/Features'
import React from 'react'
import ChooseUs from '@/app/ui/services/crm/ChooseUs'
import CrmWork from '@/app/ui/services/crm/CrmWork'
import CrmFaq from '@/app/ui/services/crm/CrmFaq'
import CrmStart from '@/app/ui/services/crm/crmStart'
import Imag from '@/app/ui/services/crm/Imag'

export const metadata = {
  title: "CRM IT Solutions",
};


const page = () => {
  return (
    <div id='mission'>
      <Hero/>
      <Features/>
      <Imag/>
      <CrmWork/>
      <ChooseUs/>
      <CrmFaq/>
      <CrmStart/>
    </div>
  )
}

export default page;
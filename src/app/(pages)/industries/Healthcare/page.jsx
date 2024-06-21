import React from 'react'
import Healfirst from '@/app/ui/industries/Healthcare/Healfirst'
import Healsec from '@/app/ui/industries/Healthcare/Healsec'
import Healthird from '@/app/ui/industries/Healthcare/Healthird'

export const metadata = {
  title: "Healthcare",
};

const page = () => {
  return (
    <div>
      <Healfirst />
      <Healsec />
      <Healthird />
    </div>
  )
}

export default page
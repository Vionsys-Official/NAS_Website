import React from 'react'
import Edufirst from '@/app/ui/industries/Education/Edufirst'
import EduSecond from '@/app/ui/industries/Education/Edusecond'
import Eduthird from '@/app/ui/industries/Education/Eduthird'

export const metadata = {
  title: "Education",
};

const page = () => {
  return (
    <div>
      <Edufirst />
      <EduSecond />
      <Eduthird />
    </div>
  )
}

export default page
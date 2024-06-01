import React from 'react'
import Bankinghero from '@/app/ui/industries/Banking/Bankinghero'
import BankingS1 from '@/app/ui/industries/Banking/BankingS1'
import Bankingchoose from '@/app/ui/industries/Banking/Bankingchoose'

export const metadata = {
  title: "Banking",
};

function page() {
  return (
    <div className="overflow-x-hidden"
    id='mission'>
      <section>
        <Bankinghero/>
      </section>

      <section2>
        <BankingS1/>
      </section2>

      <section3>
        <Bankingchoose/>
      </section3>

      
    </div>
  )
}

export default page

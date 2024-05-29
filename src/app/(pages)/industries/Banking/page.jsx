import React from 'react'
import Bankinghero from '@/app/ui/industries/Banking/Bankinghero'
import BankingS1 from '@/app/ui/industries/Banking/BankingS1'
import Bankingchoose from '@/app/ui/industries/Banking/Bankingchoose'
import Getstarted from '@/app/ui/industries/Banking/Getstarted'

function page() {
  return (
    <div>
      <section>
        <Bankinghero/>
      </section>

      <section2>
        <BankingS1/>
      </section2>

      <section3>
        <Bankingchoose/>
      </section3>

      <section4>
        <Getstarted/>
      </section4>
    </div>
  )
}

export default page

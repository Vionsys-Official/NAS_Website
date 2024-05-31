
import React from 'react'
import Bifaq from '@/app/ui/services/BIandAnalytics/Bifaq';
import Bistart from '@/app/ui/services/BIandAnalytics/Bistart';
import BiHero from '@/app/ui/services/BIandAnalytics/BiHero';

import S1 from '@/app/ui/services/BIandAnalytics/S1';
import S2 from '@/app/ui/services/BIandAnalytics/S2';
import S3 from '@/app/ui/services/BIandAnalytics/S3';
import BiChoose from '@/app/ui/services/BIandAnalytics/BiChoose';



export const metadata = {
    title: "BI & Analytics Solutions",
  };

const page = () => {
  return (
    <div id='mission' className='h-full overflow-x-hidden '>

        <section1 className=''>
            <div>
            <BiHero/>
            </div>
              <div>
                <S1/>
              </div>
            </section1>

        <section2 >
        <S2/>
        </section2>

        <section3>
        <S3/>
        </section3>

        <section4>
        <BiChoose/>   
        </section4>

        <section5>
            <div >
                <Bifaq/>
            </div>
        </section5>  
    

        <section6>
            <div className='sm:pl-6' >
                <Bistart/>
            </div>
        </section6>

    
   
 </div>
    
       
      
    
  )
}

export default page

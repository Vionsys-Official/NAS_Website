
import React from 'react'
import AiMLSec1 from '@/app/ui/services/aimlV/aiMLSec1';
import AiMLSec2 from '@/app/ui/services/aimlV/aiMLSec2';
import AiMLSec3 from '@/app/ui/services/aimlV/aiMLSec3';
import AiMLSec4 from '@/app/ui/services/aimlV/aiMLSec4';
import FaqAIV from '@/app/ui/services/aimlV/faqV';

export const metadata = {
  title: "Al and ML Solutions",
};


const aiAndml = () => {

  return (
    <main className='overflow-x-hidden'>

     {/* Section 1 */}
      <AiMLSec1/>

     {/* section 2 */}
      <AiMLSec2/>

      {/* section 3 */}
      <AiMLSec3/>

      {/* Section 4 */}
      <AiMLSec4/>

      {/* faq */}
      <FaqAIV />

    </main>
  );
};

export default aiAndml;




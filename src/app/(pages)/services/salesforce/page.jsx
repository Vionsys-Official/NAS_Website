import React from 'react';
import SalesForceSec1 from '@/app/ui/services/salesforce/salesforcesec1'
import SalesForceSec2 from '@/app/ui/services/salesforce/salesforcesec2'
import SalesForceSec3 from '@/app/ui/services/salesforce/salesforcesec3'
import SalesForceSec4 from '@/app/ui/services/salesforce/salesforcesec4'
import SalesForceSec5 from '@/app/ui/services/salesforce/salesforcesec5'

export const metadata = {
  title: "Salesforce Consulting and IT Solutions",
};


const Salesforce = () => {
  return (
    <main>
      
      <SalesForceSec1/>
    
      <SalesForceSec2/>
      
      <SalesForceSec3/>
      
      <SalesForceSec4/>
      
       {/* FAQ */}
      <SalesForceSec5/>
    </main>
  );
};

export default Salesforce;

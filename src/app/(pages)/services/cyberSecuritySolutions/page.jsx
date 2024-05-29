import FaqCyber from "@/app/ui/services/cyberSecuritySolutions/FaqCyber";
import Hero from "@/app/ui/services/cyberSecuritySolutions/Hero";
import WhatWeDo from "@/app/ui/services/cyberSecuritySolutions/WhatWeDo";
import Workflow from "@/app/ui/services/cyberSecuritySolutions/Workflow";
import GetStart2 from "@/components/ui/GetStart2";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Workflow />
      <WhatWeDo />
      <FaqCyber />
      <GetStart2 />
    </div>
  );
};

export default page;

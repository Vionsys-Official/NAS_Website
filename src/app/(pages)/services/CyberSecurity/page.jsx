import FaqCyber from "@/app/ui/services/CyberSecurity/FaqCyber";
import Hero from "@/app/ui/services/CyberSecurity/Hero";
import WhatWeDo from "@/app/ui/services/CyberSecurity/WhatWeDo";
import Workflow from "@/app/ui/services/CyberSecurity/Workflow";
import GetStart2 from "@/components/ui/GetStart2";
import React from "react";

export const metadata = {
  title: "Cyber Security Services",
};


const page = () => {
  return (
    <div id="mission" className="overflow-x-hidden">
      <Hero />
      <Workflow />
      <WhatWeDo />
      <FaqCyber />
      <GetStart2 />
    </div>
  );
};

export default page;

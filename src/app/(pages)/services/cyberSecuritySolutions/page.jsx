import FaqCyber from "@/app/ui/services/cyberSecuritySolutions/FaqCyber";
import Hero from "@/app/ui/services/cyberSecuritySolutions/Hero";
import GetStart2 from "@/components/ui/GetStart2";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <FaqCyber />
      <GetStart2/>
    </div>
  );
};

export default page;

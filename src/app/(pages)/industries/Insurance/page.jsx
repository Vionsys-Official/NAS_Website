import Hero from "@/app/ui/industries/Insurance/Hero";
import WhatWeProvide from "@/app/ui/industries/Insurance/WhatWeProvide";
import WhyChooseUs from "@/app/ui/industries/Insurance/WhyChooseUs";
import React from "react";

export const metadata = {
  title: "Insurance",
};

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <WhatWeProvide /> 
      <WhyChooseUs />
    </div>
  );
};

export default page;

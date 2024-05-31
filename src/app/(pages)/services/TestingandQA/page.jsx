import FaqTesting from "@/app/ui/services/TestingandQA/FaqTesting";
import Hero from "@/app/ui/services/TestingandQA/Hero";
import OurApproach from "@/app/ui/services/TestingandQA/OurApproach";
import TestingStrategies from "@/app/ui/services/TestingandQA/TestingStrategies";
import WhyChooseUs from "@/app/ui/services/TestingandQA/WhyChooseUs";
import GetStart2 from "@/components/ui/GetStart2";
import React from "react";

export const metadata = {
  title: "Testing and QA Services",
};


const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <OurApproach />
      <TestingStrategies />
      <WhyChooseUs />
      <FaqTesting />
      <GetStart2 />
    </div>
  );
};

export default page;

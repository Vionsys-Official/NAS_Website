import FaqTesting from "@/app/ui/services/TestingandQA/FaqTesting";
import Hero from "@/app/ui/services/TestingandQA/Hero";
import OurApproach from "@/app/ui/services/TestingandQA/OurApproach";
import TestingStrategies from "@/app/ui/services/TestingandQA/TestingStrategies";
import WhyChooseUs from "@/app/ui/services/TestingandQA/WhyChooseUs";
import GetStart2 from "@/components/ui/GetStart2";
import React from "react";

const page = () => {
  return (
    <div>
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

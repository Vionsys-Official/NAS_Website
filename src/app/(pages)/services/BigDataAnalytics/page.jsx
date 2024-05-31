import React from "react";
import Hero from "@/app/ui/services/BigDataAnalytics/Hero";
import FaqBigData from "@/app/ui/services/BigDataAnalytics/FaqBigData";
import GetStart from "@/components/ui/GetStart";
import WhatWeDo from "@/app/ui/services/BigDataAnalytics/WhatWeDo";
import BigDataEngg from "@/app/ui/services/BigDataAnalytics/BigDataEngg";
import Benefits from "@/app/ui/services/BigDataAnalytics/Benefits";
import WhatGain from "@/app/ui/services/BigDataAnalytics/WhatGain";
import HowWeBuild from "@/app/ui/services/BigDataAnalytics/HowWeBuild";
import WhyUs from "@/app/ui/services/BigDataAnalytics/WhyUs";

export const metadata = {
  title: "Big Data Analytics Services",
};

function page() {
  return (
    <div id="mission">
      <Hero />
      <WhatWeDo />
      <BigDataEngg />
      <Benefits />
      <WhatGain />
      <HowWeBuild />
      <WhyUs />
      <FaqBigData />
      <GetStart />
    </div>
  );
}

export default page;

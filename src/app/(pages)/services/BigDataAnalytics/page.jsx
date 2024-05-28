import React from "react";
import Hero from "@/app/ui/services/BigDataAnalytics/Hero";
import FaqBigData from "@/app/ui/services/BigDataAnalytics/FaqBigData";
import GetStart from "@/components/ui/GetStart";
function page() {
  return (
    <div>
      <Hero />
      <FaqBigData />
      <GetStart />
    </div>
  );
}

export default page;

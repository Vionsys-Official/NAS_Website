import FaqService from "@/app/ui/services/ITServiceSupport/FaqService";
import Hero from "@/app/ui/services/ITServiceSupport/Hero";
import Services from "@/app/ui/services/ITServiceSupport/Services";

import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <FaqService />
    </div>
  );
};

export default page;

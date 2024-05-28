import React from "react";
import Hero from "@/app/ui/services/ProductDevelopment/Hero";
import FaqProduct from "@/app/ui/services/ProductDevelopment/FaqProduct";
import Steps from "@/app/ui/services/ProductDevelopment/Steps";
import Tools from "@/app/ui/services/ProductDevelopment/Tools";
import Experts from "@/app/ui/services/ProductDevelopment/Experts";
const page = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <Tools />
      <Experts />
      <FaqProduct />
    </div>
  );
};

export default page;

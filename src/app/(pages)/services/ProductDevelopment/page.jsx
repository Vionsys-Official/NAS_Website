import React from "react";
import Hero from "@/app/ui/services/ProductDevelopment/Hero";
import FaqProduct from "@/app/ui/services/ProductDevelopment/FaqProduct";
import Steps from "@/app/ui/services/ProductDevelopment/Steps";
import Tools from "@/app/ui/services/ProductDevelopment/Tools";
import Experts from "@/app/ui/services/ProductDevelopment/Experts";
import GetStart2 from "@/components/ui/GetStart2";

export const metadata = {
  title: "Product Development Solutions",
};

const page = () => {
  return (
    <div id="mission">
      <Hero />
      <Steps />
      <Tools />
      <Experts />
      <FaqProduct />
      <GetStart2 />
    </div>
  );
};

export default page;

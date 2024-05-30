"use client";
import Image from "next/image";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import React from "react";
import ProductImage from "/public/assets/services/ProductDevelopment/Productdevop.jpg";
function Hero() {
  return (
    <section>
      <div className="relative w-[100vw] h-[90vh] ">
        <Image src={ProductImage} className="w-full h-full object-cover " />

        <div className="absolute  inset-y-0 md:right-20 right-0 flex justify-center items-center md:w-1/3 w-full">
          <div>
            <span>
              <motion.p
                variants={fadein("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }}
                className="md:text-HSub text-Para-sm text-white  pt-2 pb-4 "
              >
                Unlock innovation with our customized Product Development
                Solutions. Stay ahead in competitive markets with comprehensive
                services, state-of-the-art tools, and expert guidance.
              </motion.p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

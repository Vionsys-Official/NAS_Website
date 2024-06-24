"use client";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import React from "react";
import Button from "@/components/ui/Button";
const CTA = () => {
  return (
    <div>
      <section className="w-full md:py-6 py-2 overflow-hidden">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          {/* Ḥead and Para */}
          <div className="space-y-3">
            <motion.h2
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="font-extrabold text-start md:text-center capitalize md:text-MainHeading text-MainHeading-sm text-blue2"
            >
              Experience the innovation and efficiency firsthand. Contact us now
              to embark on your journey to excellence.
            </motion.h2>
            <motion.p
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="mx-auto max-w-[600px] text-Para text-start md:text-center"
            >
              Empower your team to prioritize feature delivery over
              infrastructure management with our automated solutions. Streamline
              your development process and accelerate your time to market.
            </motion.p>
          </div>
          {/* Button */}
          <div className="mx-auto w-full max-w-sm py-5">
            <Button />
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default CTA;

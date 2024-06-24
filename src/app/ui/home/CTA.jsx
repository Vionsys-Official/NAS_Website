"use client";
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
              initial={{ opacity: 0, scale: 1.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="font-extrabold text-start md:text-center capitalize md:text-MainHeading text-MainHeading-sm text-blue2"
            >
              Experience the innovation and efficiency firsthand. Contact us now
              to embark on your journey to excellence.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="mx-auto max-w-[600px] text-Para text-start md:text-center"
            >
              Empower your team to prioritize feature delivery over
              infrastructure management with our automated solutions. Streamline
              your development process and accelerate your time to market.
            </motion.p>
          </div>
          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: "easeInOut"
            }}
            className="mx-auto w-full max-w-sm py-5">
            <Button />
          </motion.div>
        </div>
      </section>{" "}
    </div>
  );
};

export default CTA;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "antd";
import { delay, motion } from "framer-motion";
import Image from "next/image";

import ClientImage1 from "./images/client-1.png";
import ClientImage2 from "./images/client-2.png";
import ClientImage3 from "./images/client-3.png";
import ClientImage4 from "./images/client-4.png";
import ClientImage6 from "./images/client-6.png";
import ClientImage7 from "./images/client-7.png";
import ClientImage8 from "./images/client-8.png";

const OurClients = () => {
  const [width, setWidth] = useState(0);
  const sliderWrapperRef = useRef(null);

  useEffect(() => {
    if (sliderWrapperRef.current) {
      setWidth(
        sliderWrapperRef.current.scrollWidth -
        sliderWrapperRef.current.offsetWidth
      );
    }
  }, []);

  const clients = [
    { id: 1, logo: ClientImage1 },
    { id: 2, logo: ClientImage2 },
    { id: 3, logo: ClientImage3 },
    { id: 4, logo: ClientImage4 },
    { id: 6, logo: ClientImage6 },
    { id: 7, logo: ClientImage7 },
    { id: 8, logo: ClientImage8 },
  ];

  return (
    <div className="shadow-xl overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.5 },
          ease: "easeInOut"
        }}
        className="md:text-MainHeading text-MainHeading-sm font-extrabold text-blue2 text-center py-2 capitalize">
        Our Clients
      </motion.h1>
      <section className="backdrop-blur-md w-[100vw] flex justify-center items-center px-6 py-5 bg-[#45aec5]">
        <motion.div
          ref={sliderWrapperRef}
          className="w-[100%] cursor-grab"
          initial={{ x: width }}
          animate={{ x: 0 }}
          transition={{ duration: Infinity, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex items-center gap-6"
          >
            {clients.map((client) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
              >
                <Card
                  key={client.id}
                  data-aos="zoom-in"
                  className="min-w-40 md:min-w-60 h-40 flex justify-center items-center bg-[rgba(255,255,255,0.5)]"
                >
                  <Image
                    src={client.logo}
                    className="pointer-events-none"
                    priority
                    alt={`Client ${client.id}`}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default OurClients;

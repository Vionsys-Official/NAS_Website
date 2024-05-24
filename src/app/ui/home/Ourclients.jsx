'use client'
import Client1 from './images/client-1.png';
import Client2 from './images/client-2.png';
import Client3 from './images/client-3.png';
import Client4 from './images/client-4.png';
import Client6 from './images/client-6.png';
import Client7 from './images/client-7.png';
import Client8 from './images/client-8.png';
import  { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";

export function InfiniteMovingCardsDemo() {
}
  import React from 'react'

  export const Ourclients = () => {
    return (
      <div>
        <div className="p-6">
          <motion.h1 className="md:text-MainHeading text-MainHeading-sm font-extrabold text-center">Our Clients</motion.h1>
          <div className="h-auto md:py-4 py-2 rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    )
  
  }

export default Ourclients
const testimonials = [
  {
      id: 1,
      img: Client1,
  },
  {
      id: 2,
      img: Client2,
  },
  {
      id: 3,
      img: Client3,
  },
  {
      id: 4,
      img: Client4,
  },
  {
      id: 6,
      img: Client6,
  },
  {
      id: 7,
      img: Client7,
  },
  {
      id: 8,
      img: Client8,
  },
];
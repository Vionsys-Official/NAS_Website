"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion } from "framer-motion";
import nasbg7 from "/public/assets/home/home-1.jpg";
import nasbg2 from "/public/assets/home/home-2.jpg";
import nasbg3 from "/public/assets/home/home-3.jpg";
export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  // useEffect(() => {
  //     if (emblaApi) {
  //       console.log(emblaApi.slideNodes())
  //     }
  //   }, [emblaApi])

  return (
    <section className="embla" ref={emblaRef}>
      <div className="embla__container w-auto h-[50vh] md:h-[100vh] relative">
        {/* Slide 1 */}
        <div className="embla__slide flex items-center justify-start relative bg-black">
          <div className="w-screen h-full">
            <Image
              src={nasbg7}
              alt="carousel image 1"
              quality={100}
              className="absolute opacity-45 w-full h-full object-cover"
            />
          </div>
          <div className="absolute flex flex-col justify-center h-full md:pt-48 pt-20 pl-4 md:pl-16 space-y-2 z-10">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut"
              }}
              className="md:text-6xl text-2xl font-extrabold capitalize text-white">
              <span className="text-green2">N</span>extgen{" "}
              <span className="text-green2">A</span>dvanced <br />
              <span className="text-green2">S</span>olutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut"
              }}
              className="md:text-3xl text-lg font-bold text-white">
              Comprehensive IT Solutions for Today's Challenges
            </motion.p>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="embla__slide flex items-center justify-start relative bg-black">
          <div className="w-screen h-full">
            <Image
              src={nasbg2}
              alt="carousel image 2"
              className="absolute opacity-45 w-full h-full object-cover"
              quality={100}
            />
          </div>
          <div className="absolute flex flex-col justify-center h-full md:pt-48 pt-20 pl-4 md:pl-16 space-y-2 z-10">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut"
              }}
              className="md:text-6xl text-2xl font-extrabold capitalize text-white">
              <span className="text-green2"> T</span>echnology{" "} <span className="text-green2">T</span>hat
              <br /> <span className="text-green2">D</span>rives <span className="text-green2">S</span>uccess
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut"
              }}
              className="md:text-3xl text-lg font-bold text-white">
              Empowering Businesses with Advanced IT Solutions
            </motion.p>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="embla__slide flex items-center justify-start relative bg-black">
          <div className="w-screen h-full">
            <Image
              src={nasbg3}
              alt="carousel image 3"
              quality={100}
              className="absolute opacity-45 w-full h-full object-cover"
            />
          </div>
          <div className="absolute flex flex-col justify-center h-full md:pt-48 pt-20 pl-4 md:pl-16 space-y-2 z-10">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut"
              }}
              className="md:text-6xl text-2xl font-extrabold capitalize text-white">
              <span className="text-green2">Y</span>our <span className="text-green2">P</span>artner <span className="text-green2">i</span>n
              <br /> <span className="text-green2">T</span>echnology <span className="text-green2">E</span>xcellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut"
              }}
              className="md:text-3xl text-lg font-bold text-white">
              Delivering Reliable IT Solutions Tailored to Your Needs
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

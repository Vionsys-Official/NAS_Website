"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import nasbg7 from "@/app/ui/home/images/nasbg7.jpg";
import nasbg2 from "@/app/ui/home/images/nasbg2.jpg";
import nasbg3 from "@/app/ui/home/images/nasbg3.jpg";
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
              width={3000}
              quality={100}
              className="absolute opacity-65 w-full h-full object-cover"
            />
          </div>
          <div className="absolute flex flex-col justify-center h-full md:pt-48 pt-20 pl-4 md:pl-16 space-y-2 z-10">
            <h2 className="md:text-6xl text-2xl font-extrabold uppercase tracking-tighter text-stone-400">
              <span className="text-green-500">N</span>extgen{" "}
              <span className="text-green-500">A</span>dvanced <br />
              <span className="text-green-500">S</span>olutions
            </h2>
            <p className="md:text-3xl text-lg font-thin text-white">
              Comprehensive IT Solutions for Today's Challenges
            </p>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="embla__slide flex items-center justify-start relative bg-black">
          <div className="w-screen h-full">
            <Image
              src={nasbg2}
              alt="carousel image 2"
              className="absolute opacity-65 w-full h-full object-cover"
              width={3000}
              quality={100}
            />
          </div>
          <div className="absolute flex flex-col justify-center h-full md:pt-48 pt-20 pl-4 md:pl-16 space-y-2 z-10">
            <h2 className="md:text-6xl text-2xl font-extrabold uppercase tracking-tighter text-stone-400">
              <span className="text-green-500"> Technology </span>That
              <br /> Drives Success
            </h2>
            <p className="md:text-3xl text-lg font-thin text-white">
              Empowering Businesses with Advanced IT Solutions
            </p>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="embla__slide flex items-center justify-start relative bg-black">
          <div className="w-screen h-full">
            <Image
              src={nasbg3}
              alt="carousel image 3"
              quality={100}
              className="absolute opacity-75 w-full h-full object-cover"
            />
          </div>
          <div className="absolute flex flex-col justify-center h-full md:pt-48 pt-20 pl-4 md:pl-16 space-y-2 z-10">
            <h2 className="md:text-6xl text-2xl font-extrabold uppercase tracking-tighter text-stone-400">
              <span className="text-green-500">Your Partner in</span>
              <br /> Technology Excellence
            </h2>
            <p className="md:text-3xl text-lg font-thin text-white">
              Delivering Reliable IT Solutions Tailored to Your Needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

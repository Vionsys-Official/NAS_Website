"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import nasbg5 from "@/app/ui/home/images/nasbg5.jpg";
import nasbg2 from "@/app/ui/home/images/nasbg2.jpg";
import nasbg3 from "@/app/ui/home/images/nasbg3.jpg";
import nasbg4 from "@/app/ui/home/images/nasbg4.jpg";
export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  // useEffect(() => {
  //     if (emblaApi) {
  //       console.log(emblaApi.slideNodes())
  //     }
  //   }, [emblaApi])

  return (
    <section className="embla" ref={emblaRef}>
      <div className="embla__container w-screen h-[50vh] md:h-[100vh] relative">
        {/* Slide 1 */}
        <div className="embla__slide flex items-center justify-start relative">
          <div className="w-screen h-full bg-black">
            <Image
              src={nasbg4}
              alt="carousel image 1"
              layout="fill"
              objectFit="cover"
              className="absolute object-cover opacity-75"
            />
          </div>
          <div className="absolute flex justify-center flex-col pl-4 md:w-[200vh]">
            
            <h2 className="md:text-6xl text-3xl font-extrabold uppercase tracking-tighter text-stone-400">
              <span className="text-green-500">N</span>extgen <span className="text-green-500">A</span>dvanced <br />
              <span className="text-green-500">S</span>olutions
            </h2>
            <p className="md:text-3xl text-lg font-thin text-white">
              Comprehensive IT Solutions for Today's Challenges
            </p>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="embla__slide flex items-center justify-center relative bg-black">
          <div className="w-screen h-full">
            <Image
              src={nasbg2}
              alt="carousel image 2"
              layout="fill"
              objectFit="cover"
              className="absolute opacity-95"
            />
          </div>
          <div className="absolute flex justify-start flex-col md:w-[215vh]">
            <h2 className="md:text-6xl text-3xl font-extrabold uppercase tracking-tighter text-stone-400">
              Technology That
              <br /> <span className="text-green-500">Drives Success</span>
            </h2>
            <p className="md:text-3xl text-lg font-thin text-white">
              Empowering Businesses with Advanced IT Solutions
            </p>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="embla__slide flex items-center justify-center relative bg-black ">
          <div className="w-screen">
            <Image
              src={nasbg3}
              alt="carousel image 3"
              layout="fill"
              objectFit="cover"
              className="absolute opacity-95"
            />
          </div>
          <div className="absolute flex justify-start flex-col md:w-[215vh]">
            
            <h2 className="md:text-6xl text-3xl font-extrabold uppercase tracking-tighter text-stone-400">
             <span className="text-green-500">Your Partner in</span><br /> Technology Excellence
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

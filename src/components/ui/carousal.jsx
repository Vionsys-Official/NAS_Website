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
      <div className="embla__container w-auto h-[50vh] md:h-[100vh] relative">
        {/* Slide 1 */}
        <div className="embla__slide flex items-center justify-start relative bg-black">
          <div className="w-screen h-full">
            <Image
              src={nasbg4}
              alt="carousel image 1"
              width={3000}
              className="absolute opacity-65 w-full h-full object-cover"
            />
          </div>
          <div className="absolute flex flex-col justify-center h-full md:pt-48 pt-10 pl-4 md:pl-16 space-y-4 z-10">
            <h2 className="md:text-6xl text-3xl font-extrabold uppercase tracking-tighter text-stone-400">
              <span className="text-green-500">N</span>extgen{" "}
              <span className="text-green-500">A</span>dvanced <br />
              <span className="text-green-500">S</span>olutions
            </h2>
            <p className="md:text-3xl text-lg font-thin text-white">
              Comprehensive IT Solutions for Today's Challenges
            </p>
            <p className="lg:w-1/2 text-white h-auto">
              Unlock the power of comprehensive IT solutions tailored to tackle
              today's dynamic challenges head-on. From cybersecurity to cloud
              migration, our expert team is here to guide you through every step
              of your digital journey.
            </p>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="embla__slide flex items-center justify-center relative bg-black">
          <div className="w-screen h-full">
            <Image
              src={nasbg2}
              alt="carousel image 2"
              className="absolute opacity-65 w-full h-full object-cover"
              width={3000}
            />
          </div>
          <div className="absolute flex flex-col justify-center h-full md:pt-52 pt-10 md:pl-16 space-y-4 z-10 px-2">
            <h2 className="md:text-6xl text-3xl font-extrabold uppercase tracking-tighter text-stone-400">
              Technology That
              <br /> <span className="text-green-500">Drives Success</span>
            </h2>
            <p className="md:text-3xl text-lg font-thin text-white">
              Empowering Businesses with Advanced IT Solutions
            </p>
            <p className="lg:w-1/2 text-white py-2">
              From digital transformation to strategic optimization, let us be
              your partner in driving innovation and achieving your business
              objectives. Experience the power of next-generation solutions, and
              unlock your full potential with us.
            </p>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="embla__slide flex items-center justify-center relative bg-black">
          <div className="w-screen h-full">
            <Image
              src={nasbg3}
              alt="carousel image 3"
              className="absolute opacity-75 w-full h-full object-cover"
            />
          </div>
          <div className="absolute flex flex-col justify-center h-full md:pt-48 pt-10 md:pl-16 space-y-4 z-10 px-2">
            <h2 className="md:text-6xl text-2xl font-extrabold uppercase tracking-tighter text-stone-400">
              <span className="text-green-500">Your Partner in</span>
              <br /> Technology Excellence
            </h2>
            <p className="md:text-3xl text-lg font-thin text-white">
              Delivering Reliable IT Solutions Tailored to Your Needs
            </p>
            <p className="lg:w-1/2 text-white">
              Experience the assurance of reliable IT solutions crafted
              specifically to meet your unique requirements. From scalable
              infrastructure to personalized support, trust us to empower your
              business with the tools it needs to thrive in today's competitive
              landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

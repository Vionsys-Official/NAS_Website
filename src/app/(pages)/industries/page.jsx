import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ourIndustries } from "@/app/(pages)/industries/industriesD";
import HeroSectionMainpageI from "@/app/ui/industries/heroSectionMainpageI";
export const metadata = {
  title: "Industries",
};

const page = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Hading Section*/}
      <HeroSectionMainpageI />

      {/* Cards Section */}
      <section className="p-5 ">
        <div className="max-w-[77rem] mx-auto">
          <h1 className="text-center font-semibold md:text-MainHeading text-MainHeading-sm text-gray-900  my-3 border-b-4 border-green1 relative">
            <p className="text-blue2 font-extrabold">Industries</p>
          </h1>
        </div>

        <div className="mx-auto p-5 mt-10">
          <div className="flex flex-wrap gap-10">
            {ourIndustries.map((industres, index) => (
              <Link
                key={index}
                href={industres.href1}
                className="relative shadow-xl flex flex-col rounded-xl bg-white hover:bg-gray-100 hover:border backdrop-blur-sm bg-clip-border text-gray-700 no-underline w-full sm:w-[calc(50%-2.5rem)] md:w-[calc(33.3333%-2.5rem)] lg:w-[calc(25%-2.5rem)]"
              >
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={industres.imagesrc}
                    alt={industres.title}
                    className="h-[170px] w-full rounded-md object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h5 className="mb-2 block leading-snug text-black tracking-normal text-CardHeading-sm font-semibold antialiased">
                    {industres.title}
                  </h5>
                  <p className="text-Para-sm text-gray-600">
                    {industres.description}
                  </p>
                </div>
                <div className="p-4 pt-0 mt-auto">
                  <button
                    type="button"
                    className="rounded-md bg-blue2 py-1 px-2 text-sm text-white shadow-sm hover:bg-blue1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Read more
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import EmblaCarousel from "@/components/ui/carousal";
const landing = () => {
  return (

    <>
      <main id="mission" className="">
        <EmblaCarousel />
        <section className="h-full w-full">
          <div className="flex justify-center items-center md:h-[100vh] w-screen"></div>
        </section>
      </main>
    </>
  );
};
export default landing;
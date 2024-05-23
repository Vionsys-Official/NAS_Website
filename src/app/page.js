import Image from "next/image";
import dynamic from "next/dynamic";

const Landing = dynamic(() => import("./ui/home/Landing.jsx")
);

export default function Home() {
  return (
    <main className="overflow-x-hidden">
     <Landing/>
    </main>
  );
}

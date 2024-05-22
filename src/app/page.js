import Image from "next/image";
import dynamic from "next/dynamic";

const Landing = dynamic(() => import("./ui/home/Landing.jsx")
);

export default function Home() {
  return (
    <main>
     <Landing/>
    </main>
  );
}

import Image from "next/image";
import dynamic from "next/dynamic";

const Landing = dynamic(() => import("./ui/home/Landing.jsx")
);
const Grid = dynamic(() => import("./ui/home/Grid.jsx")
);
const Ourclients = dynamic(() => import("./ui/home/Ourclients.jsx")
);
const Chooseus = dynamic(() => import("./ui/home/Chooseus.jsx")
);
export default function Home() {
  return (
    <main id="mission" className="overflow-x-hidden">
      <Landing />
      <Grid />
      <Ourclients />
      <Chooseus/>
    </main>
  );
}

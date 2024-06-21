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
const Socialproof = dynamic(() => import("./ui/home/socialproof.jsx")
);
const CTA = dynamic(() => import("./ui/home/CTA.jsx")
);

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Landing />
      <Socialproof/>
      <Grid />
      <Ourclients/>
      <Chooseus />
      <CTA/>
    </main>
  );
}

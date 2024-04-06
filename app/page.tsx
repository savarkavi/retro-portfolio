import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import { EvervaultCard } from "@/components/ui/evervault-card";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../fonts/Flexi_IBM_VGA_False.ttf",
});

export default function Home() {
  return (
    <div
      className={`h-screen w-full bg-black bg-grid-small-white/[0.2] relative ${myFont.className}`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-[-99]"></div>
      <EvervaultCard className="absolute top-0 left-0 w-full h-full z-[9]" />

      <div className=" w-full h-full z-[99] border border-[#43b243] rounded-xl flex flex-col">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

"use client";

import { WavyBackground } from "@/components/ui/wavy-background";
import { Divz } from "divz";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";

const myFont = localFont({
  src: "../../fonts/Flexi_IBM_VGA_False.ttf",
});

const Projects = () => {
  return (
    <WavyBackground
      className="w-full h-screen flex justify-center items-center"
      colors={["#80C342", "#66BC46", "#47B649", "#118B44"]}
    >
      <Divz
        showExpandButton={false}
        showPlayButton={false}
        className={`${myFont.className}`}
      >
        <Link
          href="https://sanke-case.vercel.app/"
          target="_blank"
          className="relative w-full link-container max-w-[850px] rounded-lg"
        >
          <div className="flex justify-center items-center w-full h-full z-[99] bg-gradient-to-r from-[#FFFFFF] to-[#378B29]">
            <h1 className="text-4xl text-black text-center font-bold xl:text-6xl">
              Snake Case
            </h1>
          </div>
        </Link>
        <Link
          href="https://trello-clone-sigma-wine.vercel.app/"
          target="_blank"
          className="relative w-full link-container max-w-[850px] rounded-lg"
        >
          <div className="flex justify-center items-center w-full h-full z-[99] bg-gradient-to-r from-[#FFFFFF] to-[#378B29]">
            <h1 className="text-4xl text-black text-center font-bold xl:text-6xl">
              Taskify
            </h1>
          </div>
        </Link>
        <Link
          href="https://tech-ecommerce-virid.vercel.app/"
          target="_blank"
          className="relative w-full link-container max-w-[850px] rounded-lg"
        >
          <div className="flex justify-center items-center w-full h-full z-[99] bg-gradient-to-r from-[#FFFFFF] to-[#378B29]">
            <h1 className="text-4xl text-black text-center font-bold xl:text-6xl">
              Tech Cart
            </h1>
          </div>
        </Link>
        <Link
          href="https://artico-alpha.vercel.app/"
          target="_blank"
          className="relative w-full link-container max-w-[850px] rounded-lg"
        >
          <div className="flex justify-center items-center w-full h-full z-[99] bg-gradient-to-r from-[#FFFFFF] to-[#378B29]">
            <h1 className="text-4xl text-black text-center font-bold xl:text-6xl">
              Artico
            </h1>
          </div>
        </Link>
        <Link
          href="https://manishphotography.vercel.app/"
          target="_blank"
          className="relative w-full link-container max-w-[850px] rounded-lg"
        >
          <div className="flex justify-center items-center w-full h-full z-[99] bg-gradient-to-r from-[#FFFFFF] to-[#378B29]">
            <h1 className="text-4xl text-black text-wrap text-center font-bold xl:text-6xl">
              Photography portfolio
            </h1>
          </div>
        </Link>
      </Divz>
    </WavyBackground>
  );
};

export default Projects;

"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { LampContainer } from "@/components/ui/lamp";
import { SparklesCore } from "@/components/ui/sparkles";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Divz } from "divz";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <WavyBackground
      className="w-full h-screen flex justify-center items-center"
      colors={["#80C342", "#66BC46", "#47B649", "#118B44"]}
    >
      <Divz
        showExpandButton={false}
        showPlayButton={false}
        className="border p-0"
      >
        <Link
          href="https://sanke-case.vercel.app/"
          target="_blank"
          className="relative w-full link-container max-w-[850px] rounded-lg"
        >
          <div className="flex justify-center items-center bg-gradient-to-r from-zinc-700 to-black w-full h-full">
            <h1 className="text-4xl text-white text-center">Snake Case</h1>
          </div>
          <Image
            src="/snake-case.png"
            alt="project image"
            fill
            className="hover:opacity-0 cursor-pointer hidden xl:block"
          />
        </Link>
        <Link
          href="https://trello-clone-sigma-wine.vercel.app/"
          target="_blank"
          className="relative w-full link-container max-w-[850px] rounded-lg"
        >
          <div className="flex justify-center items-center bg-gradient-to-r from-zinc-700 to-black w-full h-full">
            <h1 className="text-4xl text-white text-center">Taskify</h1>
          </div>
          <Image
            src="/taskify.png"
            alt="project image"
            fill
            className="hover:opacity-0 cursor-pointer hidden xl:block"
          />
        </Link>
        <Link
          href="https://tech-ecommerce-virid.vercel.app/"
          target="_blank"
          className="relative w-full link-container max-w-[850px] rounded-lg"
        >
          <div className="flex justify-center items-center bg-gradient-to-r from-zinc-700 to-black w-full h-full">
            <h1 className="text-4xl text-white text-center">Tech Cart</h1>
          </div>
          <Image
            src="/tech-ecommerce.png"
            alt="project image"
            fill
            className="hover:opacity-0 cursor-pointer hidden xl:block"
          />
        </Link>
        <Link
          href="https://artico-alpha.vercel.app/"
          target="_blank"
          className="relative w-full link-container max-w-[850px] rounded-lg"
        >
          <div className="flex justify-center items-center bg-gradient-to-r from-zinc-700 to-black w-full h-full">
            <h1 className="text-4xl text-white text-center">Artico</h1>
          </div>
          <Image
            src="/artico.png"
            alt="project image"
            fill
            className="hover:opacity-0 cursor-pointer hidden xl:block"
          />
        </Link>
        <Link
          href="https://manishphotography.vercel.app/"
          target="_blank"
          className="relative w-full link-container max-w-[850px] rounded-lg"
        >
          <div className="flex justify-center items-center bg-gradient-to-r from-zinc-700 to-black w-full h-full p-2">
            <h1 className="text-4xl text-white text-wrap text-center">
              Photography portfolio
            </h1>
          </div>
          <Image
            src="/manish.png"
            alt="project image"
            fill
            className="hover:opacity-0 cursor-pointer hidden xl:block"
          />
        </Link>
      </Divz>
    </WavyBackground>
  );
};

export default Projects;

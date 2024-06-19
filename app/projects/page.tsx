"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Divz } from "divz";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <WavyBackground className="w-full h-screen flex justify-center items-center">
      <Divz>
        <div className="relative">
          <h1 className="text-white text-2xl z-[999]">Snake Case</h1>
          <Image
            src="/snake-case.png"
            alt="project image"
            fill
            className="hover:opacity-0 cursor-pointer hidden xl:block"
          />
        </div>
        <div className="relative">
          <Image src="/taskify.png" alt="project image" fill />
        </div>
        <div className="relative">
          <Image src="/tech-ecommerce.png" alt="project image" fill />
        </div>
        <div className="relative">
          <Image src="/artico.png" alt="project image" fill />
        </div>
        <div className="relative">
          <Image src="/manish.png" alt="project image" fill />
        </div>
      </Divz>
    </WavyBackground>
  );
};

export default Projects;

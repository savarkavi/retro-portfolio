"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import localFont from "next/font/local";
import { GoLinkExternal } from "react-icons/go";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const myFont = localFont({
  src: "../fonts/3D-Thirteen-Pixel-Fonts.ttf",
});

const Content = ({
  openFolder,
  setOpenFolder,
}: {
  openFolder: string;
  setOpenFolder: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [hovered, setHovered] = useState(false);

  const handleOpenFolderClose = () => {
    setOpenFolder("none");
  };

  const containerVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <div className="realtive p-4 mt-6 w-full">
      <div className="z-[99] absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[350px] xl:max-w-[1000px] text-center flex flex-col items-center">
        <div className="relative w-full max-w-[500px] h-[250px]">
          <Image
            src="/homegify.gif"
            alt="home img"
            fill
            className="object-contain"
          />
        </div>
        <h1
          className={`${myFont.className} text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white`}
        >
          SUSHANT SHARMA
        </h1>
        <p className="text-white xl:text-2xl">Full-stack Developer</p>
      </div>
      {openFolder === "about" && (
        <motion.div
          className="bg-black border w-full max-w-[1000px] mx-auto h-[600px] rounded-xl relative z-[999] flex flex-col xl:flex-row justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <TextGenerateEffect
            words={
              "Based in New Delhi, India, a creative and logical-oriented Software Engineer with a deep interest in tech, programming, Game-development and AI Proven track record of creating and implementing successful full-stack applications. Looking to bring my skills to a tech company with global reach."
            }
            className="max-w-[500px] p-8"
          />
          <div className="relative w-full h-full rounded-xl">
            <Image
              src="/human.gif"
              alt="about img"
              fill
              className="rounded-xl"
            />
          </div>
          <RxCrossCircled
            className="absolute top-3 right-3 text-xl text-white cursor-pointer"
            onClick={handleOpenFolderClose}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Content;

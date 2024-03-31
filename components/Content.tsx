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
    <div className="realtive">
      <div className="z-[999] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className={`${myFont.className} text-9xl text-white`}>
          SUSHANT SHARMA
        </h1>
      </div>

      <AnimatePresence mode="wait">
        {openFolder === "ecommerce" && (
          <motion.div
            className="w-[1000px] h-[500px] bg-stone-900 rounded-xl p-10 relative z-[999]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <RxCrossCircled
              className="absolute top-3 right-3 text-xl text-white cursor-pointer"
              onClick={handleOpenFolderClose}
            />
            <div className="border h-full border-white p-4 rounded-xl">
              <div className="flex justify-between gap-6 w-full h-full">
                <GlowingStarsBackgroundCard className="max-w-[300px] w-full h-full flex flex-col justify-between">
                  <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
                  <div className="flex flex-col justify-between gap-4">
                    <GlowingStarsDescription className="text-sm">
                      The power of full-stack to the frontend. Read the release
                      notes.
                    </GlowingStarsDescription>
                    <div className="h-8 w-8 text-green-500 cursor-pointer">
                      <GoLinkExternal />
                    </div>
                  </div>
                </GlowingStarsBackgroundCard>
                <div
                  className="relative w-full h-full"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <div className="relative w-full h-full rounded-xl">
                    <Image
                      src="/ecommerce.png"
                      alt="poe"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {openFolder === "social" && (
          <motion.div
            className="w-[1000px] h-[500px] bg-stone-900 rounded-xl p-10 relative z-[999]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <RxCrossCircled
              className="absolute top-3 right-3 text-xl text-white cursor-pointer"
              onClick={handleOpenFolderClose}
            />
            <div className="border h-full border-white p-4 rounded-xl">
              <div className="flex justify-between gap-6 w-full h-full">
                <GlowingStarsBackgroundCard className="max-w-[300px] w-full h-full flex flex-col justify-between">
                  <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
                  <div className="flex flex-col justify-between gap-4">
                    <GlowingStarsDescription className="text-sm">
                      The power of full-stack to the frontend. Read the release
                      notes.
                    </GlowingStarsDescription>
                    <div className="h-8 w-8 text-green-500 cursor-pointer">
                      <GoLinkExternal />
                    </div>
                  </div>
                </GlowingStarsBackgroundCard>
                <div
                  className="relative w-full h-full"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <div className="relative w-full h-full rounded-xl">
                    <Image
                      src="/social.png"
                      alt="poe"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {openFolder === "artico" && (
        <div className="w-[1000px] h-[500px] bg-stone-900 rounded-xl p-10 relative z-[999]">
          <RxCrossCircled
            className="absolute top-3 right-3 text-xl text-white cursor-pointer"
            onClick={handleOpenFolderClose}
          />
          <div className="border h-full border-white p-4 rounded-xl">
            <div className="flex justify-between gap-6 w-full h-full">
              <GlowingStarsBackgroundCard className="max-w-[300px] w-full h-full flex flex-col justify-between">
                <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
                <div className="flex flex-col justify-between gap-4">
                  <GlowingStarsDescription className="text-sm">
                    The power of full-stack to the frontend. Read the release
                    notes.
                  </GlowingStarsDescription>
                  <div className="h-8 w-8 text-green-500 cursor-pointer">
                    <GoLinkExternal />
                  </div>
                </div>
              </GlowingStarsBackgroundCard>
              <div
                className="relative w-full h-full"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="relative w-full h-full rounded-xl">
                  <Image
                    src="/artico.png"
                    alt="poe"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;

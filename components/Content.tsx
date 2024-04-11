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

      <AnimatePresence mode="wait">
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

        {openFolder === "photography" && (
          <motion.div
            className="w-full max-w-[1000px] mx-auto h-[500px] bg-stone-900 rounded-xl py-10 px-2 xl:px-10 relative z-[999]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <RxCrossCircled
              className="absolute top-3 right-3 text-xl text-white cursor-pointer"
              onClick={handleOpenFolderClose}
            />
            <div className="border h-full border-white p-4 rounded-xl mt-4 w-full">
              <div className="flex justify-between gap-6 w-full h-full">
                <GlowingStarsBackgroundCard className="md:max-w-[300px] w-full max-w-[1000px] h-full flex flex-col justify-between">
                  <GlowingStarsTitle>Tech-Cart</GlowingStarsTitle>
                  <div className="flex flex-col justify-between gap-4">
                    <GlowingStarsDescription className="text-sm">
                      A front-end Photography Portfolio website made for a real
                      client. Made with NextJS 14.
                    </GlowingStarsDescription>
                    <div className="h-8 w-8 text-green-500 cursor-pointer">
                      <Link
                        href="https://manishphotography.vercel.app/"
                        target="_blank"
                      >
                        <GoLinkExternal />
                      </Link>
                    </div>
                  </div>
                </GlowingStarsBackgroundCard>
                <div className="relative w-full h-full hidden md:block">
                  <div className="relative w-full h-full rounded-xl">
                    <Image
                      src="/manish.png"
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

        {openFolder === "ecommerce" && (
          <motion.div
            className="w-full max-w-[1000px] mx-auto h-[500px] bg-stone-900 rounded-xl py-10 px-2 xl:px-10 relative z-[999]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <RxCrossCircled
              className="absolute top-3 right-3 text-xl text-white cursor-pointer"
              onClick={handleOpenFolderClose}
            />
            <div className="border h-full border-white p-4 rounded-xl mt-4 w-full">
              <div className="flex justify-between gap-6 w-full h-full">
                <GlowingStarsBackgroundCard className="md:max-w-[300px] w-full max-w-[1000px] h-full flex flex-col justify-between">
                  <GlowingStarsTitle>Tech-Cart</GlowingStarsTitle>
                  <div className="flex flex-col justify-between gap-4">
                    <GlowingStarsDescription className="text-sm">
                      A full-stack E-commerce website with Admin Dashboard. Made
                      with NextJS 14.
                    </GlowingStarsDescription>
                    <div className="h-8 w-8 text-green-500 cursor-pointer">
                      <Link
                        href="https://tech-ecommerce-virid.vercel.app/"
                        target="_blank"
                      >
                        <GoLinkExternal />
                      </Link>
                    </div>
                  </div>
                </GlowingStarsBackgroundCard>
                <div className="relative w-full h-full hidden md:block">
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
            className="w-full max-w-[1000px] mx-auto h-[500px] bg-stone-900 rounded-xl py-10 px-2 xl:px-10 relative z-[999]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <RxCrossCircled
              className="absolute top-3 right-3 text-xl text-white cursor-pointer"
              onClick={handleOpenFolderClose}
            />
            <div className="border h-full border-white p-4 rounded-xl mt-4">
              <div className="flex justify-between gap-6 w-full h-full">
                <GlowingStarsBackgroundCard className="md:max-w-[300px] w-full max-w-[1000px] h-full flex flex-col justify-between">
                  <GlowingStarsTitle>Saamaajik</GlowingStarsTitle>
                  <div className="flex flex-col justify-between gap-4">
                    <GlowingStarsDescription className="text-sm">
                      A full-stack social-media website made with NextJS 14.
                    </GlowingStarsDescription>
                    <div className="h-8 w-8 text-green-500 cursor-pointer">
                      <Link
                        href="https://saamaajik.vercel.app/"
                        target="_blank"
                      >
                        <GoLinkExternal />
                      </Link>
                    </div>
                  </div>
                </GlowingStarsBackgroundCard>
                <div className="relative w-full h-full hidden md:block">
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
        {openFolder === "artico" && (
          <motion.div
            className="w-full max-w-[1000px] mx-auto h-[500px] bg-stone-900 rounded-xl py-10 px-2 xl:px-10 relative z-[999]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <RxCrossCircled
              className="absolute top-3 right-3 text-xl text-white cursor-pointer"
              onClick={handleOpenFolderClose}
            />
            <div className="border h-full border-white p-4 rounded-xl mt-4">
              <div className="flex justify-between gap-6 w-full h-full">
                <GlowingStarsBackgroundCard className="md:max-w-[300px] w-full max-w-[1000px] h-full flex flex-col justify-between">
                  <GlowingStarsTitle>Artico</GlowingStarsTitle>
                  <div className="flex flex-col justify-between gap-4">
                    <GlowingStarsDescription className="text-sm">
                      A full-stack Blogs publishing app made with MERN stack.
                    </GlowingStarsDescription>
                    <div className="h-8 w-8 text-green-500 cursor-pointer">
                      <Link
                        href="https://artico-blog-app.onrender.com/"
                        target="_blank"
                      >
                        <GoLinkExternal />
                      </Link>
                    </div>
                  </div>
                </GlowingStarsBackgroundCard>
                <div className="relative w-full h-full hidden md:block">
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Content;

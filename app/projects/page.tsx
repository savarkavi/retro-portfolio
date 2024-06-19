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
      <Divz>
        <Link
          href="https://sanke-case.vercel.app/"
          target="_blank"
          className="relative"
        >
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Snake Case
            </motion.h1>
          </LampContainer>
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
          className="relative"
        >
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Taskify
            </motion.h1>
          </LampContainer>
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
          className="relative"
        >
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Tech Cart
            </motion.h1>
          </LampContainer>
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
          className="relative"
        >
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Artico
            </motion.h1>
          </LampContainer>
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
          className="relative"
        >
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Photographer portfolio
            </motion.h1>
          </LampContainer>
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

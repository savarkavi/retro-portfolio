"use client";

import React from "react";
import localFont from "next/font/local";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const myFont = localFont({
  src: "../fonts//UNICODE0.ttf",
});

const Navbar = () => {
  return (
    <div className="bg-[#43b243] rounded-t-xl h-[50px] px-6 flex items-center justify-between z-[999]">
      <h1 className={`${myFont.className} text-3xl`}>S</h1>
      <div className="sm:flex items-center gap-8 hidden">
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <p>+91-7678265751</p>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail />
          <p>sushant20.sharma00@gmail.com</p>
        </div>
        <Link href="https://github.com/savarkavi" target="_blank">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

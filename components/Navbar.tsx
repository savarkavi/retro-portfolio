"use client";

import React from "react";
import localFont from "next/font/local";
import { SlCalender } from "react-icons/sl";
import { FaRegClock, FaWifi } from "react-icons/fa";

const myFont = localFont({
  src: "../fonts//UNICODE0.ttf",
});

const Navbar = () => {
  return (
    <div className="bg-green-600 rounded-t-xl h-[50px] px-6 flex items-center justify-between z-[999]">
      <h1 className={`${myFont.className} text-3xl`}>S</h1>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <SlCalender />
          <p>March 22, 2024</p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegClock />
          <p>14:46</p>
        </div>
        <FaWifi />
      </div>
    </div>
  );
};

export default Navbar;

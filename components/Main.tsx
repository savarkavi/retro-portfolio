"use client";

import React, { useState } from "react";
import Folders from "./Folders";
import Content from "./Content";

const Main = () => {
  const [openFolder, setOpenFolder] = useState("none");

  return (
    <div className="w-full h-full flex items-center justify-center relative rounded-b-xl bg-black">
      <Folders openFolder={openFolder} setOpenFolder={setOpenFolder} />
      <Content openFolder={openFolder} setOpenFolder={setOpenFolder} />
    </div>
  );
};

export default Main;

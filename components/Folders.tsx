"use client";

import React from "react";
import { FaRegFolderOpen } from "react-icons/fa6";
import { IoMdDocument } from "react-icons/io";

const Folders = ({
  openFolder,
  setOpenFolder,
}: {
  openFolder: string;
  setOpenFolder: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleOpenFolderChange = (name: string) => {
    setOpenFolder(name);
  };

  return (
    <div className="absolute left-6 top-[5%] z-[999]">
      <div className="flex flex-col gap-20">
        <div className="cursor-pointer flex flex-col items-center">
          <IoMdDocument className="text-green-600 text-4xl" />
          <p className="text-white">About.txt</p>
        </div>
        <div
          className="cursor-pointer flex flex-col items-center"
          onClick={() => handleOpenFolderChange("ecommerce")}
        >
          <FaRegFolderOpen className="text-green-600 text-4xl" />
          <p className="text-white max-w-[130px] text-center">
            E-Commerce Project
          </p>
        </div>
        <div
          className="cursor-pointer flex flex-col items-center"
          onClick={() => handleOpenFolderChange("social")}
        >
          <FaRegFolderOpen className="text-green-600 text-4xl" />
          <p className="text-white max-w-[130px] text-center">
            Social-Media Project
          </p>
        </div>
        <div
          className="cursor-pointer flex flex-col items-center"
          onClick={() => handleOpenFolderChange("artico")}
        >
          <FaRegFolderOpen className="text-green-600 text-4xl" />
          <p className="text-white max-w-[130px] text-center">Blogs Project</p>
        </div>
      </div>
    </div>
  );
};

export default Folders;
